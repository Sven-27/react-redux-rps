import React from 'react'
import "./Hands.css"
import Hand from "./Hand"

const Hands = () => {
  return (
    <div className="hands">
      <div className="hands__triangle">
        <img src="/images/triangle.svg" alt="triangle"/>
      </div>
      <div className="hands__top">
        <Hand value="Paper" />
        <Hand value="Scissors" />
      </div>
      <div className="hands__bottom">
        <Hand value="Rock" />
      </div>
      
    </div>
  )
}

export default Hands
