import React from 'react'
import CV from '../assets/download/Internship Cover Letter nattavut014.pdf'

const AboutBox = () => {
  return (
    <div>
      <section className='section' id='about'>
        <div className='top-header'>
          <h1>
            About Me
          </h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className="about-info">
              <h3>My introduction</h3>
              <p>
                "Hello! I am a software engineering student with a passion for frontend development and UI/UX design. 
                I enjoy creating intuitive and visually appealing user interfaces, 
                focusing on delivering smooth and engaging user experiences. 
                I love turning ideas into functional and user-friendly designs using modern tools and technologies."
                <p>Let me know if you'd like to adjust anything!</p>
              </p>
              <div className='about-btn'>
                <a href={CV} target='_blank'>
                  <button className='btn'>
                    Dowload CV <i className='uil uil-import'></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='skill-box'>
              <div className="skill-header">
                <h3>Frontend</h3>
              </div>
              <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Tailwind</span>
                <span>React</span>
              </div>
            </div>
            <div className='skill-box'>
              <div className="skill-header">
                <h3>Backend</h3>
              </div>
              <div className="skills-list">
                <span>PHP</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className='skill-box'>
              <div className="skill-header">
                <h3>DataBase</h3>
              </div>
              <div className="skills-list">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutBox
