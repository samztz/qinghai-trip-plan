import './Badge.css'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'terracotta' | 'gold' | 'charcoal'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}
