import { MapPin, Calendar, Compass } from 'lucide-react'
import QuoteBlock from '../components/QuoteBlock'
import { TripMeta } from '../data/journal'
import './Hero.css'

interface HeroProps {
  meta: TripMeta
}

export default function Hero({ meta }: HeroProps) {
  return (
    <section className="hero fade-in">
      <div className="hero-stamp">
        <span>{meta.duration}</span>
      </div>
      <h1 className="hero-title">{meta.title}</h1>
      <p className="hero-subtitle">{meta.subtitle}</p>

      <div className="hero-stats">
        <div className="stat-card">
          <Calendar size={18} />
          <span>{meta.duration}</span>
        </div>
        <div className="stat-card">
          <MapPin size={18} />
          <span>{meta.distance}</span>
        </div>
        <div className="stat-card">
          <Compass size={18} />
          <span>{meta.bestTime}</span>
        </div>
      </div>

      <div className="hero-quote">
        <QuoteBlock text="这不是一次打卡，而是一场穿越两亿年地质史、三千年丝路史、八百年民族交融史的时空漫游。" size="md" />
      </div>
    </section>
  )
}
