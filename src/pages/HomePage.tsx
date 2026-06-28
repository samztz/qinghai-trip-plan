import Hero from '../sections/Hero'
import TripThreads from '../sections/TripThreads'
import DayOverviewList from '../sections/DayOverviewList'
import GearSection from '../sections/GearSection'
import ClosingSection from '../sections/ClosingSection'
import { journalData } from '../data/journal'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page fade-in">
      <Hero meta={journalData.meta} />
      <TripThreads threads={journalData.meta.threads} />
      <DayOverviewList days={journalData.days} />
      <GearSection gears={journalData.gears} />
      <ClosingSection advices={journalData.advices} />
    </div>
  )
}
