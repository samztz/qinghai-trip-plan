import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, Clock, Mountain, Home } from 'lucide-react'
import QuoteBlock from '../components/QuoteBlock'
import SpotCard from '../components/SpotCard'
import { DayPlan } from '../data/journal'
import './DayPage.css'

interface DayPageProps {
  days: DayPlan[]
}

export default function DayPage({ days }: DayPageProps) {
  const { dayId } = useParams<{ dayId: string }>()
  const id = parseInt(dayId || '', 10)
  const day = days.find((d) => d.id === id)

  if (!day) {
    return <Navigate to="/" replace />
  }

  const prevDay = days.find((d) => d.id === id - 1)
  const nextDay = days.find((d) => d.id === id + 1)

  return (
    <div className="day-page fade-in">
      <nav className="day-breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <Home size={14} />
          <span>返回首页</span>
        </Link>
      </nav>

      <header className="day-header" style={{ backgroundImage: `linear-gradient(rgba(61,53,46,0.35), rgba(61,53,46,0.5)), url(/images/${day.image})` }}>
        <div className="day-header-content">
          <span className="day-label">Day {day.id}</span>
          <h1>{day.title}</h1>
          <div className="day-meta">
            <span><MapPin size={14} /> {day.route}</span>
            <span><Clock size={14} /> {day.distance}</span>
            <span><Mountain size={14} /> {day.altitude}</span>
          </div>
        </div>
      </header>

      <div className="day-quote">
        <QuoteBlock text={day.quote} size="lg" />
      </div>

      <section className="day-spots">
        {day.spots.map((spot, index) => (
          <SpotCard key={spot.name} spot={spot} index={index} />
        ))}
      </section>

      <nav className="day-pagination">
        {prevDay ? (
          <Link to={`/day/${prevDay.id}`} className="pagination-link pagination-prev">
            <ArrowLeft size={18} />
            <div>
              <span>上一天</span>
              <strong>{prevDay.title}</strong>
            </div>
          </Link>
        ) : (
          <div className="pagination-link pagination-prev pagination-disabled">
            <ArrowLeft size={18} />
            <div>
              <span>已是第一天</span>
            </div>
          </div>
        )}

        {nextDay ? (
          <Link to={`/day/${nextDay.id}`} className="pagination-link pagination-next">
            <div>
              <span>下一天</span>
              <strong>{nextDay.title}</strong>
            </div>
            <ArrowRight size={18} />
          </Link>
        ) : (
          <div className="pagination-link pagination-next pagination-disabled">
            <div>
              <span>已是最后一天</span>
            </div>
            <ArrowRight size={18} />
          </div>
        )}
      </nav>
    </div>
  )
}
