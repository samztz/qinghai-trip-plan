import { FileText, MapPin, Clock, Hotel, Utensils } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { DayPlan } from '../data/journal'
import './SummarySection.css'

interface SummarySectionProps {
  days: DayPlan[]
}

export default function SummarySection({ days }: SummarySectionProps) {
  return (
    <section className="summary-section fade-in" id="summary">
      <SectionTitle
        title="一页纸行程"
        subtitle="打印或截图，路上随手查"
      />
      <div className="summary-card">
        <div className="summary-header">
          <FileText size={18} />
          <span>8 天 7 晚 · 青甘大环线</span>
        </div>
        <div className="summary-list">
          {days.map((day) => (
            <div key={day.id} className="summary-item">
              <div className="summary-day-title">
                <span className="summary-day-number">Day {day.id}</span>
                <strong>{day.title.split('｜')[1] || day.title}</strong>
              </div>
              <div className="summary-day-meta">
                <span><MapPin size={12} /> {day.route}</span>
                <span><Clock size={12} /> {day.driveTime}</span>
                <span><Hotel size={12} /> 宿：{day.stayCity}</span>
                {day.meals.length > 0 && (
                  <span><Utensils size={12} /> {day.meals[0]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
