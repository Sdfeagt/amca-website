import React from 'react'

import "../styles/Board.css"

const BoardSlide = ({member}) => {
  return (
      <div className='BoardSlide'>
      <img src={member.src} alt={member.alt}></img>
      <div className='Content'>
      <div>
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <p>{member.phone}</p>
        <p>{member.mail}</p>
      </div>
      </div>
      </div>
  )
}

export default BoardSlide