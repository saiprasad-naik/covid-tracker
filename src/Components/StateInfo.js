import React from 'react'
import './StateInfo.css'

export default function StateInfo(props) {
  return (
    <div className={props.className}>
      <h4>{props.heading}</h4>
      <p>{props.figures}</p>
    </div>
  )
}
