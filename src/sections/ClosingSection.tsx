import SectionTitle from '../components/SectionTitle'
import './ClosingSection.css'

interface ClosingSectionProps {
  advices: string[]
}

export default function ClosingSection({ advices }: ClosingSectionProps) {
  return (
    <section className="closing-section fade-in" id="closing">
      <SectionTitle
        title="写在最后"
        subtitle="给旅行者的三个建议"
      />
      <ol className="closing-list">
        {advices.map((advice, index) => (
          <li key={index} className="closing-card">
            <span className="closing-number">{index + 1}</span>
            <p>{advice}</p>
          </li>
        ))}
      </ol>
      <div className="closing-footer">
        <p>祝你一路顺风，满载故事而归。</p>
        <span>🏔️ 📖 🐫</span>
      </div>
    </section>
  )
}
