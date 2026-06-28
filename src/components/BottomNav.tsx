import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Calendar, Backpack, Heart, Menu, X } from 'lucide-react'
import './BottomNav.css'

interface NavItem {
  to: string
  icon: React.ReactNode
  label: string
  id?: string
}

const navItems: NavItem[] = [
  { to: '/', icon: <Home size={20} />, label: '首页' },
  { to: '/day/1', icon: <Calendar size={20} />, label: '行程' },
  { to: '/#gear', icon: <Backpack size={20} />, label: '装备', id: 'gear' },
  { to: '/#closing', icon: <Heart size={20} />, label: '结语', id: 'closing' },
]

function useScrollToHash() {
  const { pathname, hash } = useLocation()
  const initialScrollDone = useRef(false)

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (pathname === '/' && !hash && initialScrollDone.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    initialScrollDone.current = true
  }, [pathname, hash])
}

export default function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()

  useScrollToHash()

  // Track scroll position on home page to update active section
  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const sections = [
      { id: 'top', element: null as Element | null },
      { id: 'gear', element: document.getElementById('gear') },
      { id: 'closing', element: document.getElementById('closing') },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || 'top'
            setActiveSection(sectionId)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element)
      }
    })

    // Observe the top of the page
    const topMarker = document.querySelector('.home-page')
    if (topMarker) {
      observer.observe(topMarker)
    }

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  // Set initial active section based on hash
  useEffect(() => {
    if (pathname === '/') {
      if (hash === '#gear') {
        setActiveSection('gear')
      } else if (hash === '#closing') {
        setActiveSection('closing')
      } else {
        setActiveSection('top')
      }
    }
  }, [pathname, hash])

  const handleNavClick = (to: string) => {
    setMenuOpen(false)

    if (to.startsWith('/#')) {
      const id = to.replace('/#', '')
      if (pathname === '/') {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setActiveSection(id)
        }
      } else {
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
    if (to === '/#gear') {
      return pathname === '/' && activeSection === 'gear'
    }
    if (to === '/#closing') {
      return pathname === '/' && activeSection === 'closing'
    }
    if (to === '/day/1') {
      return pathname.startsWith('/day/')
    }
    return pathname === '/' && activeSection === 'top'
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
