import React from 'react'
import Avatar from '../image/avatar.jpeg'

const FeaturedBox = () => {
  return (
    <section className='featured-box' id='home'>
      <div className='featured-text'>
        <div className='featured-text-card'>
          <span>Mr.Nattavut Kaewmaha</span>
        </div>
        <div className='featured-name'>
          I'm <span className='typedText'></span>
        </div>
        <div className='featured-text-info'>
        </div>
        <div className='featured-text-button'>
          <button className='btn'>
            Dowload CV <i className='uil uil-import'></i>
          </button>
        </div>
        <div className='social_icons'>
          <div className='icon'>
            <a href="https://www.instagram.com/solaomnattavut/">
            <i className='uil uil-instagram'></i>
            </a>
          </div>
          <div className='icon'>
            <a href="https://www.facebook.com/solaom.nattavut">
              <i className='uil uil-facebook'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='featured-image'>
        <div className='image'>
          <img src={Avatar} alt="" />
        </div>
      </div>
         <div className='scroll-icon-box'>
          <a href="#about" className='scroll-btn'>
            <i className='uil uil-mouse-alt'></i>
            <p>Scroll Down</p>
          </a>
         </div>
    </section>
  )
}

export default FeaturedBox
