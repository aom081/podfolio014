import React from 'react'

const ProjectsBox = () => {
  return (
    <div>
      <section className='section' id='project'>
        <div className="top-header">
          <h1>Shop</h1>
        </div>
        <div className="project-container">
          <div className="project-box">
            <i className='uil uil-briefcase-alt'></i>
            <h3>Completed</h3>
            <label>15+ Finished projects</label>
          </div>
          <div className="project-box">
            <i className='uil uil-briefcase-alt'></i>
            <h3>Client</h3>
            <label>25+ Happy Clients</label>
          </div>
          <div className="project-box">
            <i className='uil uil-briefcase-alt'></i>
            <h3>Experience</h3>
            <label>7+ Years in the field</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsBox
