import { CheckCircle2, XCircle, CalendarCheck, AlertCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { PreTripInfo } from '../data/journal'
import './PreTripSection.css'

interface PreTripSectionProps {
  preTrip: PreTripInfo
}

export default function PreTripSection({ preTrip }: PreTripSectionProps) {
  return (
    <section className="pre-trip-section fade-in" id="pretrip">
      <SectionTitle
        title="出发前必读"
        subtitle="费用、 booking 与特别提醒"
      />

      <div className="pre-trip-grid">
        <div className="pre-trip-card pre-trip-included">
          <div className="pre-trip-card-header">
            <CheckCircle2 size={18} />
            <h3>费用包含</h3>
          </div>
          <ul className="pre-trip-list">
            {preTrip.included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pre-trip-card pre-trip-excluded">
          <div className="pre-trip-card-header">
            <XCircle size={18} />
            <h3>费用不含</h3>
          </div>
          <ul className="pre-trip-list">
            {preTrip.excluded.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pre-trip-card pre-trip-booking">
          <div className="pre-trip-card-header">
            <CalendarCheck size={18} />
            <h3>Booking 提醒</h3>
          </div>
          <ul className="pre-trip-list pre-trip-list-booking">
            {preTrip.bookingNotes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pre-trip-card pre-trip-special">
          <div className="pre-trip-card-header">
            <AlertCircle size={18} />
            <h3>特别说明</h3>
          </div>
          <ul className="pre-trip-list pre-trip-list-special">
            {preTrip.specialNotes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
