import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Home.css'


const HomeSlide = ({slide}) => {
  console.log("Sending to", slide.send);
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => navigate(`/${slide.send}`, {replace: true}), [slide.send, navigate]);
  return (
    <div className='HomeSlide'>
    <img src='IMG_6920.jpg' alt='Rafal_pic'></img>
    <div className='Content'>
    <div>
      <h2>{slide.big}</h2>
      <p>{slide.small}</p>
      <button onClick={handleOnClick}>Send me there!</button>
    </div>
    </div>
    </div>
  )
}

export default HomeSlide