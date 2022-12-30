import React, {useEffect} from 'react'

import "../styles/Contact.css"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='ContactPage'>
      <h1>Contact</h1>
      <div className='WelcomeContact'>
      <p>Want to partner with us? Get in touch!</p>
      </div>
      <div className='PresidentContact'>
        <h2>Deepanker Kanjarla</h2>
        <p>President</p>
        <div className='PresidentInfo'>
        <p>✆ +358 406 623 447</p>
        <p>✉ deepanker.kanjarla@aalto.fi</p>
        </div>
      </div>
      <div className='GeneralEnq'>
        <h2>General Enquieries</h2>
        <p>✉ general@amca.fi</p>
      </div>
    </div>
  )
}

export default Contact