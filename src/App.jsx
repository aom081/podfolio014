import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import FeaturedBox from './component/FeaturedBox'
import AboutBox from './component/AboutBox'
import ProjectsBox from './component/ProjectsBox'
import ContactBox from './component/ContactBox'
import Footer from './component/Footer'
import Typed from 'typed.js'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    //** Type Effect */
    const typingEffect = new Typed('.typedText', {
      strings: [" Full Stack Developer.", " UI/UX designer", " Software Developer.","BETTER!!"],
        typeSpeed: 100,  
        backSpeed: 50,
        backDelay: 2000,
        loop: true, 
        });
        return() =>{
          typingEffect.destroy();
        }
  },[])
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
