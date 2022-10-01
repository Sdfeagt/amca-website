import React from 'react'
import HomeSlide from './HomeSlide'

import '../styles/Home.css'
import HomeSlideRev from './HomeSlideRev'


//Must be a better way to implement distance between elements than br, but it will work for now.
const Home = () => {

  const aboutSlide = {
    big: "Important text for about slide about",
    small: "Less important text for about slide about",
    send: "about",
    src: 'IMG_6920.jpg',
    alt: 'Rafal pic'
  }

  const eventsSlide = {
    big: "Important text for about slide events",
    small: "Less important text for about slide events",
    send: "events",
    src: 'IMG_689843.jpg',
    alt: 'Deep pic'
  }

  const boardSlide = {
    big: "Important text for about slide board",
    small: "Less important text for about slide board",
    send: "board",
    src: 'Board.jpg',
    alt: 'Board pic'
  }

  return (
    <div className='First-look'>
      <br></br>
      <br></br>
      <h1>Aalto Management</h1>
      <h1>Consulting assosiation</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>We are here to spread awerness about consulting in the Aalto University community.</p>
      <p>Join us and explore the opportunities hidden in the world of consulting!</p>
      <HomeSlide slide={aboutSlide}/>
      <HomeSlideRev slide={eventsSlide}/>
      <HomeSlide slide={boardSlide}/>
    </div>
  )
}

export default Home