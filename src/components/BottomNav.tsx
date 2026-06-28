import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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

export default function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change or escape key
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

  return (
    <>
      {/* Mobile bottom bar */}
      <nav className="bottom-nav mobile-nav" aria-label="主导航">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
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
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
