import React from 'react'
import NavBar from './NavBar'
import "../styles/Header.css"

const Header = () => {
  return (
    <section className='Header'>
        <section>
            <section className='Logo'>
              <img src='logomark.teal__1_-removebg-preview.png' alt='Logo' width={100} height={100}></img>
            </section>
            <section className='Nav'><NavBar/></section>
        </section>
    </section>
  )
}

export default Header