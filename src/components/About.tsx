import React, {useEffect} from 'react'

import '../styles/About.css'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        The Aalto Management Consulting Association (AMCA) is a student-led organization at Aalto University, dedicated to connecting students interested in a career in consulting with consulting firms and providing them with the knowledge, skills, and resources they need to succeed in the field. Our mission is to foster a community of consulting enthusiasts within Aalto University and provide them with opportunities to learn, grow, and connect with each other and with industry professionals.
        </p>
        </div>
      </div>
      </div>

      <div className='ContentRev'>
      <div className='textstuffRev'>
        <p>
        At AMCA, we strive to provide our members with a range of opportunities to learn, grow, and connect with the consulting industry. One of the ways we do this is through our CV Clinics, which are interactive workshops focused on helping students develop the skills and knowledge they need to succeed in the consulting world. We also host keynote speeches and other events featuring industry professionals, who share their insights and experiences with our members and provide valuable networking opportunities. In addition to these activities, we also offer support and resources to help our members pursue internships and full-time positions in consulting firms, and we work to build strong relationships with consulting companies to help create more opportunities for our members.
        </p>
      </div>
      <div className='TopicRev'>
        <h1>What do we do?</h1>
      </div>
      </div>

    </div>
  )
}

export default About