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
import ScrollReveal from 'scrollreveal'

function App() {
  useEffect(() => {
    //* Change active-link */
    const section = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      section.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
          document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
      });
    };

    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    // Apply ScrollReveal to various elements
    sr.reveal(".feature-text-card", {});
    sr.reveal(".feature-name", { delay: 150 });
    sr.reveal(".feature-text-info", { delay: 150 });
    sr.reveal(".feature-text-btn", { delay: 150 });
    sr.reveal(".social_icons", { delay: 150 });
    sr.reveal(".feature-image", { delay: 150 });

    sr.reveal(".project-box", { interval: 150 });

    sr.reveal(".top-header", {});

    const srLeft  = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    srLeft.reveal(".about-info",{ delay: 150 });
    srLeft.reveal(".contact-info", { delay: 150 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true,
    })

    srRight.reveal(".skill-box", {delay: 100 })
    srRight.reveal(".form-control", { delay: 100 })

    window.addEventListener("scroll", scrollActive);

    //** Type Effect */
    const typingEffect = new Typed(".typedText", {
      strings: [
        "เพชรดีมณีแดง","เขียวใสแสงมรกต", "เหลืองใสสดบุษราคัม", "แดงแก่ก่ำโกเมนเอก", "สีหมอกเมฆนิลกาฬ", "มุกดาหารหมอกมัว", "แดงสลัวเพทาย", "สังวาลย์สายไพฑูรย์"],
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typingEffect.destroy();
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
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
