import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import BottomNav from './BottomNav'
import BackgroundDecorations from './BackgroundDecorations'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const isDayPage = pathname.startsWith('/day/')

  return (
    <div className="layout">
      <BackgroundDecorations />
      <main className={`layout-main ${isDayPage ? 'day-view' : ''}`}>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
