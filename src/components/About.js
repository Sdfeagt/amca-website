import React from 'react'

import '../styles/About.css'

const About = () => {
  return (
    <div className='aboutPage'>
      <div className='Entrance'>
      <h1>About</h1>
      <p>Our goal is to unite Aalto University students interested in a career in consulting and to create a connection between these students and consulting companies.</p>
      </div>
      <div className='Content'>
      <div className='Topic'>
        <h1>Who are we?</h1>
      </div>
      <div className='textstuff'>
        <div>
        <p>
        We are a student organization in Aalto University that 
        aims to support the development of its members in the skills 
        required for a career in management consulting, and to improve
         the readiness of members for working life.
        </p>
        </div>
      </div>
      </div>

      <div className='ContentRev'>
      <div className='textstuffRev'>
        <div>
        <p>
        We belive that the field of consulting would greatly benefit by opening it's doors to 
        previously untapped pool of talented students. By organizing different events, such as CV 
        clinics, keynote speeches and other networking events we hope to bring Aalto community closer 
        to the field of consulting.
        </p>
        </div>
      </div>
      <div className='TopicRev'>
        <h1>What do we do?</h1>
      </div>
      </div>

    </div>
  )
}

export default About