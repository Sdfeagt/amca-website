import React from 'react'
import NavBar from './NavBar'
import "../styles/Header.css"
import { useNavigate } from "react-router-dom";
import{useCallback} from 'react';



const Header = () => {
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return (
    <section className='Header'>
      <section className='Logo'>
        <img src='logomark.teal__1_-removebg-preview.png' alt='Logo' width={100} height={100} onClick={handleOnClick}></img>
      </section>
      <section className='Nav'><NavBar/></section>
    </section>
  )
}

export default Header