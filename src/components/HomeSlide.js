import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom';

const HomeSlide = (WhereToSend) => {
  console.log("Sending to", WhereToSend);
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => navigate(`/${WhereToSend}`, {replace: true}), [WhereToSend, navigate]);

  return (
    <div className='HomeSlide'>
      <div className='Image'>
        <img src='IMG_6920.jpg' alt='Rafal_pic'></img>
      </div>
    <div className='Content'>
    <div>
      <h2>Important text!</h2>
      <p>Text text text text</p>
      <button onClick={handleOnClick}>Send me there!</button>
    </div>
    </div>

    </div>
  )
}

export default HomeSlide