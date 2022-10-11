import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const sendFB = ()=>{
    window.open("https://www.facebook.com/amca.aalto")
  }
  const sendInsta = () =>{
    window.open("https://www.instagram.com/amca.aalto/?igshid=YmMyMTA2M2Y%3D")
  }
  const sendLin = () =>{
    window.open("https://www.linkedin.com/company/aalto-management-consulting-association/")
  }
  return (
    <div className='Footer'>
        <img className='footer-logo' src='logotype.teal-removebg-preview.png' alt='logo footer'></img>
        <div className='footer-social'>
          <img className='footer-social-fb' src='fb.png' alt='facebo-social' onClick={sendFB}></img>
          <img className='footer-social-insta' src='insta.png' alt='insta-social' onClick={sendInsta}></img>
          <img className='footer-social-linked' src='linked.png' alt='linked-social' onClick={sendLin}></img>
        </div>
        <div className='footer-sponsors'>
            <img className='footer-sponsor1' src='600x600.png' alt='Sponsor1'></img>
            <img className='footer-sponsor2' src='600x600.png' alt='Sponsor2'></img>
            <img className='footer-sponsor3' src='600x600.png' alt='Sponsor3'></img>
        </div>
    </div>
  )
}

export default Footer