import React from 'react'
import "./Hand.css"

const Hand = ({value}) => {
  return (
    <div className="hand">
      <img src={`/images/Hand${value}.png`} alt="hand"/>
    </div>
  )
}

export default Hand
