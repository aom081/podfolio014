import React from 'react'

const Header = () => {
    const menuFunction = () => {
        const menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className === "nav-menu") {
            menuBtn.className += ' responsive';
        } else {
            menuBtn.className = "nav-menu";
        }
    }
    return (
        <nav id='header'>
            <div className='nav-logo'>
                <p className='nav-name'>nattavut</p>
                <span>.</span>
            </div>
            <div className='nav-menu' id='myNavMenu'>
                <ul className='nav_menu_list'>
                    <li className='nav_list'>
                        <a href="#home" className='active-link'>Home</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#about" className='nav-link'>About</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#project" className='nav-link'>Project</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#contact" className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='nav-button'>
                <button className='btn'>
                    Dowload CV <i className='uil uil-import'></i>
                </button>
            </div>
            <div className='nav-menu-btn'>
                <i className='uil uil-bars' onClick={menuFunction}></i>
            </div>
        </nav>
    )
}

export default Header
