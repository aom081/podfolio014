import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>Nattavut keawmaha</p>
      </div>
      <div className="middle-footer">
        <ul className='footer-menu'>
          <li className='footer_menu_list'><a href='#'>Home</a></li>
          <li className='footer_menu_list'><a href='#about'>About</a></li>
          <li className='footer_menu_list'><a href='#project'>Project</a></li>
          <li className='footer_menu_list'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className='footer-social-icons'>
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
        <div className='icon'>
          <a href="https://github.com/aom081">
            <i className='uil uil-github'></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Copyright &copy; <a href="#" style={{textDecoration: "none"}}>Nattavut</a> - All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
