import SectionTitle from '../components/SectionTitle'
import { TripMeta } from '../data/journal'
import './TripThreads.css'

interface TripThreadsProps {
  threads: TripMeta['threads']
}

export default function TripThreads({ threads }: TripThreadsProps) {
  const variants = ['blue', 'gold', 'charcoal'] as const

  return (
    <section className="trip-threads fade-in">
      <SectionTitle
        title="行前必修课"
        subtitle="三条理解西北的线索"
      />
      <div className="threads-list">
        {threads.map((thread, index) => (
          <div key={index} className={`thread-card thread-${variants[index % variants.length]}`}>
            <span className="thread-number">0{index + 1}</span>
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
