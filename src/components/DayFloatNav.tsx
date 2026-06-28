import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import './DayFloatNav.css'

interface DayFloatNavProps {
  currentDayId: number
  totalDays: number
}

const AWAKE_DURATION = 3000

export default function DayFloatNav({ currentDayId, totalDays }: DayFloatNavProps) {
  const [awake, setAwake] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const wake = useCallback(() => {
    setAwake(true)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setAwake(false)
    }, AWAKE_DURATION)
  }, [])

  useEffect(() => {
    // Auto-fade after initial mount
    timerRef.current = setTimeout(() => {
      setAwake(false)
    }, AWAKE_DURATION)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return (
    <nav
      className={`day-float-nav ${awake ? 'awake' : ''}`}
      aria-label="日期快速导航"
      onMouseEnter={wake}
      onMouseLeave={wake}
      onClick={wake}
    >
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((dayId) => (
        <Link
          key={dayId}
          to={`/day/${dayId}`}
          className={dayId === currentDayId ? 'active' : ''}
          title={`Day ${dayId}`}
          onClick={() => {
            wake()
          }}
        >
          {dayId}
        </Link>
      ))}
    </nav>
  )
}
