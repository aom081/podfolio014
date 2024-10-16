import React from 'react'
import Avatar from '../image/avatar.jpeg'
import CV from '../assets/download/Internship Cover Letter nattavut014.pdf'

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
          "Hello! I am a software engineering student with a passion for frontend development and UI/UX design. 
          I enjoy creating intuitive and visually appealing user interfaces, focusing on delivering smooth and engaging user experiences. 
          I love turning ideas into functional and user-friendly designs using modern tools and technologies."
          <p> Let me know if you'd like to adjust anything!</p>
        </div>
        <div className='featured-text-button'>
          <a href={CV} target='_blank'><button className='btn'>
            Dowload CV <i className='uil uil-import'></i>
          </button>
          </a>
        </div>
        <div className='social_icons'>
          <div className='icon'>
            <a href="https://www.instagram.com/solaomnattavut/" target='_blank'>
            <i className='uil uil-instagram'></i>
            </a>
          </div>
          <div className='icon'>
            <a href="https://www.facebook.com/solaom.nattavut" target='_blank'>
              <i className='uil uil-facebook'></i>
            </a>
          </div>
          <div className='icon'>
            <a href="https://github.com/aom081" target='_blank'>
              <i className='uil uil-github'></i>
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
