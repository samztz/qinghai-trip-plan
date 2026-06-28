import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Calendar, Backpack, Heart, Menu, X } from 'lucide-react'
import './BottomNav.css'

interface NavItem {
  to: string
  icon: React.ReactNode
  label: string
}

const navItems: NavItem[] = [
  { to: '/', icon: <Home size={20} />, label: '首页' },
  { to: '/day/1', icon: <Calendar size={20} />, label: '行程' },
  { to: '/#gear', icon: <Backpack size={20} />, label: '装备' },
  { to: '/#closing', icon: <Heart size={20} />, label: '结语' },
]

function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (pathname === '/' && !hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
}

export default function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  useScrollToHash()

  const handleNavClick = (to: string) => {
    setMenuOpen(false)

    if (to.startsWith('/#')) {
      const id = to.replace('/#', '')
      if (pathname === '/') {
        // Already on home page, just scroll
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to home, then scroll after render
        navigate('/#' + id)
      }
    } else {
      navigate(to)
    }
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (to: string) => {
    if (to.startsWith('/#')) {
      return pathname === '/' && hash === to.replace('/', '')
    }
    if (to === '/day/1') {
      return pathname.startsWith('/day/')
    }
    return pathname === to
  }

  return (
    <>
      {/* Mobile bottom bar */}
      <nav className="bottom-nav mobile-nav" aria-label="主导航">
        {navItems.map((item) => (
          <button
            key={item.to}
            className={isActive(item.to) ? 'active' : ''}
            onClick={() => handleNavClick(item.to)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop hamburger */}
      <button
        className={`desktop-nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? '关闭导航' : '打开导航'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop menu overlay */}
      {menuOpen && (
        <div
          className="desktop-nav-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop side menu */}
      <nav
        className={`desktop-nav ${menuOpen ? 'open' : ''}`}
        aria-label="主导航"
      >
        <div className="desktop-nav-header">
          <span>快速导航</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="关闭导航"
          >
            <X size={18} />
          </button>
        </div>
        <div className="desktop-nav-items">
          {navItems.map((item) => (
            <button
              key={item.to}
              className={isActive(item.to) ? 'active' : ''}
              onClick={() => handleNavClick(item.to)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
