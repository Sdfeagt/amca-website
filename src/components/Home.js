import React from 'react'
import HomeSlide from './HomeSlide'

import '../styles/Home.css'


//Must be a better way to implement distance between elements than br, but it will work for now.
const Home = () => {
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
      <HomeSlide whereToSend={"about"}/>
    </div>
  )
}

export default Home