import React from 'react'
import './StateFigures.css'

export default function StateFigures(props) {
  return (
    <div className='state-figures-cont'>
      <h4 className='state-figures-cont-heading'>{props.heading}</h4>
      <p className='state-figures-cont-figures'>{props.figures}</p>
    </div>
  )
}
