import { ExternalLink } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { Reading } from '../data/journal'
import './ReadingSection.css'

interface ReadingSectionProps {
  readings: Reading[]
}

export default function ReadingSection({ readings }: ReadingSectionProps) {
  return (
    <section className="reading-section fade-in" id="readings">
      <SectionTitle
        title="延伸阅读"
        subtitle="真实体验型游记，非营销号"
      />
      <ul className="reading-list">
        {readings.map((reading, index) => (
          <li key={index}>
            <a href={reading.url} target="_blank" rel="noopener noreferrer" className="reading-card">
              <div className="reading-main">
                <span className="reading-platform">{reading.platform}</span>
                <h4>{reading.title}</h4>
                <p>{reading.highlight}</p>
              </div>
              <ExternalLink size={16} className="reading-icon" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
