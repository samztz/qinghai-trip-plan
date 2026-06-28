import { MapPin, BookOpen, Sparkles, AlertTriangle } from 'lucide-react'
import Badge from './Badge'
import { Spot } from '../data/journal'
import './SpotCard.css'

interface SpotCardProps {
  spot: Spot
  index: number
}

export default function SpotCard({ spot, index }: SpotCardProps) {
  return (
    <article className="spot-card fade-in" style={{ animationDelay: `${index * 80}ms` }}>
      {spot.image && (
        <div className="spot-image">
          <img src={`/images/${spot.image}`} alt={spot.name} loading="lazy" />
        </div>
      )}

      <div className="spot-header">
        <div className="spot-pin">
          <MapPin size={16} />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="spot-title">
          <h3>{spot.name}</h3>
          {spot.tag && <Badge variant="blue">{spot.tag}</Badge>}
        </div>
      </div>

      <div className="spot-body">
        <div className="spot-section">
          <div className="spot-section-title">
            <BookOpen size={16} />
            <span>人文纵深</span>
          </div>
          {spot.depth.map((paragraph, i) => (
            <p key={i} className="spot-paragraph">{paragraph}</p>
          ))}
        </div>

        <div className="spot-section">
          <div className="spot-section-title">
            <Sparkles size={16} />
            <span>旅行趣味</span>
          </div>
          <ul className="spot-list">
            {spot.fun.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {spot.tips && spot.tips.length > 0 && (
          <div className="spot-section spot-tips">
            <div className="spot-section-title">
              <AlertTriangle size={16} />
              <span>安全贴士</span>
            </div>
            <ul className="spot-list">
              {spot.tips.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
