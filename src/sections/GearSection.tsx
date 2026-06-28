import { Sun, Shirt, Footprints, Pill, Battery, Droplets, Banknote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { GearItem } from '../data/journal'
import './GearSection.css'

interface GearSectionProps {
  gears: GearItem[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  防晒: <Sun size={16} />,
  衣物: <Shirt size={16} />,
  鞋履: <Footprints size={16} />,
  药品: <Pill size={16} />,
  数码: <Battery size={16} />,
  日用: <Droplets size={16} />,
  现金: <Banknote size={16} />,
}

export default function GearSection({ gears }: GearSectionProps) {
  return (
    <section className="gear-section fade-in" id="gear">
      <SectionTitle
        title="终极装备清单"
        subtitle="带上好奇心，也别忘了这些"
      />
      <div className="gear-grid">
        {gears.map((gear, index) => (
          <div key={index} className="gear-card">
            <div className="gear-category">
              {categoryIcons[gear.category] || <Sun size={16} />}
              <span>{gear.category}</span>
            </div>
            <h4>{gear.item}</h4>
            <p>{gear.reason}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
