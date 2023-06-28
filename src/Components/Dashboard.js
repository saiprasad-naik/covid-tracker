import React from 'react'
import CurrentKPI from './CurrentKPI'
import DailyRise from './DailyRise'
import TableArea from './TableArea'

export default function Dashboard() {
  return (
    <div>
      <CurrentKPI/>
      <DailyRise/>
        <TableArea/>
    </div>
  )
}
