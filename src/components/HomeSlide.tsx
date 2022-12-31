import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Home.css'


const HomeSlide = ({slide}) => {
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => navigate(`/${slide.send}`, {replace: true}), [slide.send, navigate]);
  return (
    <div className='HomeSlide'>
    <img src={slide.src} alt={slide.alt} onClick={handleOnClick}></img>
    <div className='Content'>
    <div>
      <h2>{slide.big}</h2>
      <p>{slide.small}</p>
      <button className='Button' onClick={handleOnClick}>Learn more</button>
    </div>
    </div>
    </div>
  )
}

export default HomeSlide