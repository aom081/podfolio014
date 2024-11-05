import React from 'react'
import Avatar from '../image/avatar.jpg'
import CV from '../assets/download/Internship Cover Letter nattavut014.pdf'

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Mr.Nattavut Kaewmaha</span>
        </div>
        <div className="featured-name">
          <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          Gemstones or precious stones are crystalline minerals that often
          contain impurities, which give them their various colors. These stones
          have hardness and can be cut to create facets that allow light to
          disperse, producing a brilliant sparkle. The impurities within the
          mineral are responsible for the different colors. Pure corundum, an
          aluminum oxide, is typically colorless, but when trace amounts of
          chromium are present, it appears red, forming rubies. On the other
          hand, the presence of iron and titanium can impart a blue hue, as seen
          in sapphires.
        </div>
        <div className="featured-text-button">
          <a href={CV} target="_blank">
            <button className="btn">Buy Jewelry</button>
          </a>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/solaomnattavut/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33"
                />
              </svg>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/solaom.nattavut" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M15.12 5.32H17V2.14A26 26 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73"
                />
              </svg>
            </a>
          </div>
          <div className="icon">
            <a href="https://x.com/?lang=th" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.5 7.5 0 0 1-1.874.794a5.15 5.15 0 0 0-3.374-1.242a5.23 5.23 0 0 0-5.223 5.063a11.03 11.03 0 0 1-6.814-3.924a1.01 1.01 0 0 0-.857-.365a1 1 0 0 0-.785.5a5.28 5.28 0 0 0-.242 4.769l-.002.001a1.04 1.04 0 0 0-.496.89a3 3 0 0 0 .027.439a5.2 5.2 0 0 0 1.568 3.312a1 1 0 0 0-.066.77a5.2 5.2 0 0 0 2.362 2.922a7.5 7.5 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.94 12.94 0 0 0 7.01 2.061a12.79 12.79 0 0 0 12.465-9.363a12.8 12.8 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202m-3.306 3.212a1 1 0 0 0-.234.702c.01.165.009.331.009.488a10.8 10.8 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a11 11 0 0 1-2.55-.301a9.5 9.5 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.2 3.2 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.2 3.2 0 0 1-2.25-1.726a5 5 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.2 3.2 0 0 1-1.425-2.673q0-.1.006-.198a13 13 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.2 3.2 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.18 3.18 0 0 1 2.345 1.02a.99.99 0 0 0 .921.298a9 9 0 0 0 1.212-.322a6.7 6.7 0 0 1-1.026 1.524"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={Avatar} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox
