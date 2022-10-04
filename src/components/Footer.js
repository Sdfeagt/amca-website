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
    <section className='Footer'>
        <img className='footer-logo' src='logotype.teal-removebg-preview.png' alt='logo footer'></img>
        <section className='footer-social'>
          <img className='footer-social-fb' src='fb.png' alt='facebo-social' onClick={sendFB}></img>
          <img className='footer-social-insta' src='insta.png' alt='insta-social' onClick={sendInsta}></img>
          <img className='footer-social-linked' src='linked.png' alt='linked-social' onClick={sendLin}></img>
        </section>
        <section>
            <section className='footer-sponsor1'>Sponsor 1</section>
            <section className='footer-sponsor2'>Sponsor 2</section>
            <section className='footer-sponsor3'>Sponsor 3</section>
        </section>
    </section>
  )
}

export default Footer