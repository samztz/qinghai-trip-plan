import { Link } from 'react-router-dom'
import { MapPin, Clock, Mountain, Hotel, Utensils } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import QuoteBlock from '../components/QuoteBlock'
import { DayPlan } from '../data/journal'
import './DayOverviewList.css'

interface DayOverviewListProps {
  days: DayPlan[]
}

export default function DayOverviewList({ days }: DayOverviewListProps) {
  return (
    <section className="day-overview fade-in" id="itinerary">
      <SectionTitle
        title="八天行程"
        subtitle="点击任意一天，查看详细安排"
      />
      <div className="day-cards">
        {days.map((day) => (
          <Link to={`/day/${day.id}`} key={day.id} className="day-card">
            <div className="day-card-image">
              <img src={`/images/${day.image}`} alt={day.title} loading="lazy" />
              <span className="day-card-number">Day {day.id}</span>
            </div>
            <div className="day-card-body">
              <h3>{day.title}</h3>
              <div className="day-card-meta">
                <span><MapPin size={14} /> {day.route}</span>
                <span><Clock size={14} /> {day.driveTime}</span>
                <span><Mountain size={14} /> {day.altitude}</span>
                <span><Hotel size={14} /> 宿：{day.stayCity}</span>
                {day.meals.length > 0 && (
                  <span className="day-card-meal"><Utensils size={14} /> {day.meals[0]}</span>
                )}
              </div>
              <div className="day-card-quote">
                <QuoteBlock text={day.quote} size="sm" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
