import { NavLink } from 'react-router-dom'
import { Home, Calendar, Backpack, Heart } from 'lucide-react'
import './BottomNav.css'

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="主导航">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <Home size={20} />
        <span>首页</span>
      </NavLink>
      <NavLink to="/day/1" className={({ isActive }) => (isActive ? 'active' : '')}>
        <Calendar size={20} />
        <span>行程</span>
      </NavLink>
      <NavLink to="/#gear" className={({ isActive }) => (isActive ? 'active' : '')}>
        <Backpack size={20} />
        <span>装备</span>
      </NavLink>
      <NavLink to="/#closing" className={({ isActive }) => (isActive ? 'active' : '')}>
        <Heart size={20} />
        <span>结语</span>
      </NavLink>
    </nav>
  )
}
