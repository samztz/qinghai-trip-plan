import Hero from '../sections/Hero'
import TripThreads from '../sections/TripThreads'
import PreTripSection from '../sections/PreTripSection'
import DayOverviewList from '../sections/DayOverviewList'
import SummarySection from '../sections/SummarySection'
import GearSection from '../sections/GearSection'
import SafetySection from '../sections/SafetySection'
import ClosingSection from '../sections/ClosingSection'
import { journalData } from '../data/journal'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page fade-in">
      <Hero meta={journalData.meta} />
      <TripThreads threads={journalData.meta.threads} />
      <PreTripSection preTrip={journalData.preTrip} />
      <DayOverviewList days={journalData.days} />
      <SummarySection days={journalData.days} />
      <GearSection gears={journalData.gears} />
      <SafetySection items={journalData.safety} />
      <ClosingSection advices={journalData.advices} />
    </div>
  )
}
