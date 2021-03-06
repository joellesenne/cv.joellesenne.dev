import React from 'react'
import Profile from 'url:../assets/images/profile.jpg'

const Header = () => (
  <header className='header'>
    <picture>
      <img src={Profile} alt='Profile' />
    </picture>
    <h1>Joël <br /> Lesenne</h1>
    <p>Développeur Web</p>
    <a className='email' href='mailto:contact@joellesenne.dev'>contact@joellesenne.dev</a>
    <a className='phone' href='tel:+33611578371'>+33 611 578 371</a>
    <a className='site' href='https://joellesenne.dev' target='_blank' rel='noopener noreferrer'>joellesenne.dev</a>
  </header>
)

export default Header
