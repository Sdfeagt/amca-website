import React, {useEffect} from 'react'
import HomeSlide from './HomeSlide'

import '../styles/Home.css'
import HomeSlideRev from './HomeSlideRev'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const aboutSlide = {
    big: "About us",
    small: "Welcome to the Aalto Management Consulting Association (AMCA)! We are a student-led organization at Aalto University, dedicated to connecting students interested in a career in consulting with consulting firms and providing them with the knowledge, skills, and resources they need to succeed in the field.",
    send: "about",
    src: 'IMG_6920.png',
    alt: 'Rafal pic'
  }

  const eventsSlide = {
    big: "Events",
    small: "Are you interested in learning more about the events that AMCA has to offer? From interactive CV Clinics to inspiring keynote speeches, our events provide valuable opportunities for our members to develop the skills and knowledge they need to succeed in the consulting industry. Learn more about the types of events we host and how you can get involved!",
    send: "events",
    src: 'IMG_689843.jpg',
    alt: 'Deep pic'
  }

  const boardSlide = {
    big: "Board of 2022",
    small: "Meet the talented and dedicated individuals who make up the AMCA board of 2022! We are passionate about consulting and are working hard to provide valuable resources and opportunities to our fellow AMCA members. Get to know more about each board member and their role in the organization!",
    send: "board",
    src: 'Board.jpg',
    alt: 'Board pic'
  }

  return (
    <div className='HomePage'>
      <h1>Aalto Management</h1>
      <h1>Consulting assosiation</h1>
      <div className='WelcomeStuff'>
      <p>We are here to spread awerness about consulting in the Aalto University community.</p>
      <p>Join us and explore the opportunities hidden in the world of consulting!</p>
      </div>
      <HomeSlide slide={aboutSlide}/>
      <HomeSlideRev slide={eventsSlide}/>
      <HomeSlide slide={boardSlide}/>
    </div>
  )
}

export default Home