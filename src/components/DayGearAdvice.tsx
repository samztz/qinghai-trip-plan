import { Backpack, Shirt, AlertCircle } from 'lucide-react'
import './DayGearAdvice.css'

interface DayGearAdviceProps {
  advice: string[]
}

export default function DayGearAdvice({ advice }: DayGearAdviceProps) {
  if (!advice || advice.length === 0) return null

  return (
    <section className="day-gear-advice fade-in">
      <div className="day-gear-header">
        <Backpack size={18} />
        <h3>今日装备建议</h3>
      </div>
      <ul className="day-gear-list">
        {advice.map((item, index) => (
          <li key={index}>
            {item.startsWith('🎒') && <Backpack size={14} className="gear-icon gear-bring" />}
            {item.startsWith('👕') && <Shirt size={14} className="gear-icon gear-wear" />}
            {item.startsWith('⚠️') && <AlertCircle size={14} className="gear-icon gear-alert" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
