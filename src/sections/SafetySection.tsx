import { ShieldAlert } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { SafetyItem } from '../data/journal'
import './SafetySection.css'

interface SafetySectionProps {
  items: SafetyItem[]
}

export default function SafetySection({ items }: SafetySectionProps) {
  return (
    <section className="safety-section fade-in" id="safety">
      <SectionTitle
        title="安全与风俗"
        subtitle="平平安安回家，比出片更重要"
      />
      <div className="safety-grid">
        {items.map((item, index) => (
          <div key={index} className="safety-card">
            <div className="safety-card-header">
              <ShieldAlert size={16} />
              <h3>{item.title}</h3>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
