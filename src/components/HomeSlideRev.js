import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Home.css'

const HomeSlideRev = ({slide}) => {
    const navigate = useNavigate()
    const handleOnClick = useCallback(() => navigate(`/${slide.send}`, {replace: true}), [slide.send, navigate]);
    return (
      <div className='HomeSlideRev'>
      <div className='ContentRev'>
      <div>
        <h2>{slide.big}</h2>
        <p>{slide.small}</p>
        <button className='Button' onClick={handleOnClick}>Send me there!</button>
      </div>
      </div>
      <img src={slide.src} alt={slide.alt}></img>
      </div>
    )
}


export default HomeSlideRev