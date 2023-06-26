import React from 'react'
import FiguresCards from './FiguresCards'

export default function DailyRise() {
  return (
    <div>
      <div className="current-daily-cont">
      <div className="cont-heading">
        <h2>Daily Rise</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="current-kpi-cards">
        <FiguresCards cardHeading="Positve Increase" cardIcon="faVirusCovid"   />
        <FiguresCards cardHeading="Negative Increase" />
        <FiguresCards cardHeading="Hopitalised Increase" />
        <FiguresCards cardHeading="Death Increase" />
      </div>
    </div>
    </div>
  )
}
