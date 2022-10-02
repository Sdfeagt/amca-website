import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <section className='Footer'>
        <img className='footer-logo' src='logotype.teal-removebg-preview.png' alt='logo footer'></img>
        <section className='footer-social'>
          <img className='footer-social-fb' src='fb.png' alt='facebo-social'></img>
          <img className='footer-social-insta' src='insta.png' alt='insta-social'></img>
          <img className='footer-social-linked' src='linked.png' alt='linked-social'></img>
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