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
    small: "Learn about us and our mission!",
    send: "about",
    src: 'IMG_6920.png',
    alt: 'Rafal pic'
  }

  const eventsSlide = {
    big: "Events",
    small: "Get to know our events!",
    send: "events",
    src: 'IMG_689843.jpg',
    alt: 'Deep pic'
  }

  const boardSlide = {
    big: "Board of 2022",
    small: "Find out the members of thi year's board.",
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