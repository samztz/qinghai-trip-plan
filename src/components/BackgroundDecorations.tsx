import {
  Mountain,
  Compass,
  Camera,
  Map,
  Sun,
  Tent,
  Car,
  Moon,
  Flame,
  Droplets,
  TrainFront,
  Church,
} from 'lucide-react'
import './BackgroundDecorations.css'

const decorations = [
  { Icon: Mountain, color: 'var(--accent-blue)', top: '8%', left: '6%', size: 42 },
  { Icon: Compass, color: 'var(--accent-gold)', top: '18%', right: '8%', size: 36 },
  { Icon: Camera, color: 'var(--accent-terracotta)', top: '32%', left: '10%', size: 30 },
  { Icon: Map, color: 'var(--accent-charcoal)', top: '45%', right: '5%', size: 40 },
  { Icon: Sun, color: 'var(--accent-gold)', top: '58%', left: '4%', size: 34 },
  { Icon: Tent, color: 'var(--accent-blue)', top: '70%', right: '10%', size: 32 },
  { Icon: Car, color: 'var(--accent-terracotta)', top: '82%', left: '8%', size: 28 },
  { Icon: Moon, color: 'var(--accent-charcoal)', top: '88%', right: '7%', size: 36 },
  { Icon: Flame, color: 'var(--accent-terracotta)', top: '25%', left: '85%', size: 26 },
  { Icon: Droplets, color: 'var(--accent-blue)', top: '65%', left: '90%', size: 30 },
  { Icon: TrainFront, color: 'var(--accent-gold)', top: '50%', left: '2%', size: 32 },
  { Icon: Church, color: 'var(--accent-charcoal)', top: '12%', left: '45%', size: 28 },
]

export default function BackgroundDecorations() {
  return (
    <div className="background-decorations" aria-hidden="true">
      {decorations.map((item, index) => {
        const { Icon, color, size, ...position } = item
        return (
          <div
            key={index}
            className="bg-decoration"
            style={{
              ...position,
              color,
              width: size,
              height: size,
              transform: `rotate(${45 + index * 15}deg)`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <Icon size={size} strokeWidth={1.4} />
          </div>
        )
      })}
    </div>
  )
}
