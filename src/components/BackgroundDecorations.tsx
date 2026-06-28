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
  Cloud,
  Flag,
  Footprints,
  Leaf,
  Star,
  Heart,
  Anchor,
  Binoculars,
  Watch,
  Backpack,
} from 'lucide-react'
import './BackgroundDecorations.css'

const decorations = [
  { Icon: Mountain, top: '5%', left: '4%', size: 38 },
  { Icon: Compass, top: '12%', left: '18%', size: 30 },
  { Icon: Camera, top: '8%', left: '34%', size: 26 },
  { Icon: Map, top: '15%', left: '50%', size: 34 },
  { Icon: Sun, top: '6%', left: '66%', size: 32 },
  { Icon: Tent, top: '14%', left: '82%', size: 28 },
  { Icon: Car, top: '20%', left: '92%', size: 30 },
  { Icon: Moon, top: '26%', left: '8%', size: 28 },
  { Icon: Flame, top: '30%', left: '24%', size: 24 },
  { Icon: Droplets, top: '34%', left: '42%', size: 28 },
  { Icon: TrainFront, top: '28%', left: '58%', size: 30 },
  { Icon: Church, top: '36%', left: '74%', size: 26 },
  { Icon: Cloud, top: '42%', left: '90%', size: 34 },
  { Icon: Flag, top: '48%', left: '3%', size: 26 },
  { Icon: Footprints, top: '52%', left: '20%', size: 28 },
  { Icon: Leaf, top: '56%', left: '36%', size: 24 },
  { Icon: Star, top: '50%', left: '54%', size: 26 },
  { Icon: Heart, top: '58%', left: '70%', size: 24 },
  { Icon: Anchor, top: '62%', left: '86%', size: 30 },
  { Icon: Binoculars, top: '68%', left: '10%', size: 28 },
  { Icon: Watch, top: '72%', left: '28%', size: 24 },
  { Icon: Backpack, top: '76%', left: '46%', size: 32 },
  { Icon: Mountain, top: '80%', left: '64%', size: 36 },
  { Icon: Compass, top: '84%', left: '80%', size: 30 },
  { Icon: Camera, top: '88%', left: '94%', size: 26 },
  { Icon: Star, top: '92%', left: '6%', size: 28 },
  { Icon: Tent, top: '94%', left: '24%', size: 26 },
  { Icon: Sun, top: '90%', left: '40%', size: 32 },
  { Icon: Map, top: '96%', left: '56%', size: 28 },
  { Icon: Footprints, top: '92%', left: '72%', size: 24 },
]

export default function BackgroundDecorations() {
  return (
    <div className="background-decorations" aria-hidden="true">
      {decorations.map((item, index) => {
        const { Icon, size, ...position } = item
        const rotation = 30 + (index % 5) * 15 // 30, 45, 60, 75, 90 degrees alternating
        return (
          <div
            key={index}
            className="bg-decoration"
            style={{
              ...position,
              width: size,
              height: size,
              '--rotate': `${rotation}deg`,
              animationDelay: `${(index % 8) * 0.4}s`,
            } as React.CSSProperties}
          >
            <Icon size={size} strokeWidth={1.4} />
          </div>
        )
      })}
    </div>
  )
}
