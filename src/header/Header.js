import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../assets/pics-1.jpeg";
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ochuko Onomavwe</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
