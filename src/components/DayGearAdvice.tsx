import { Backpack, Shirt, AlertCircle, CheckCircle2 } from 'lucide-react'
import './DayGearAdvice.css'

interface DayGearAdviceProps {
  advice: string[]
}

function detectType(item: string): 'bring' | 'wear' | 'alert' | 'default' {
  if (item.includes('携带') || item.includes('带')) return 'bring'
  if (item.includes('穿着') || item.includes('穿') || item.includes('鞋')) return 'wear'
  if (item.includes('注意') || item.includes('应急') || item.includes('提醒') || item.includes('小心')) return 'alert'
  return 'default'
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
        {advice.map((item, index) => {
          const type = detectType(item)
          return (
            <li key={index}>
              {type === 'bring' && <Backpack size={14} className="gear-icon gear-bring" />}
              {type === 'wear' && <Shirt size={14} className="gear-icon gear-wear" />}
              {type === 'alert' && <AlertCircle size={14} className="gear-icon gear-alert" />}
              {type === 'default' && <CheckCircle2 size={14} className="gear-icon gear-default" />}
              <span>{item}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
