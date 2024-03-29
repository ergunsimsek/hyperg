import React from 'react';
import logo from '../assets/img/youtubist-logo.png'
import apple from '../assets/img/applestore.jpeg'
import video from '../assets/video/videos.m4v'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function SocialMedia() {
    return (
        <div className="app-store">
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/">
                <img src={apple} alt="apple store" />
            </a>
            <div className="social-icons">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/youtubist.co/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/youtubist_co">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter"
                    >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-youtube"
                    >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                </a>
            </div>
            <div className="made-in">
                <p>
                  M. Kemal ATATURK.
                </p>
            </div>
        </div>
    )
}


function Main({children}) {
  return (
      <Layout>
          <div className="col-md-6">
              <div className="hero-left">
                  <Link to={'/'}>
                      <img src={logo} width={250} className="animated lightSpeedIn" alt="Youtubist Logo" />
                  </Link>
                  <h3>Hyperg.nl/h3>
                  {children}
                  <div className="hidden-mobile">
                      <SocialMedia />
                  </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="hero-right">
                  <div className="video_container slideDownTransition">
                      <video id="vid" playsinline loop muted autoPlay src={video} />
                  </div>
              </div>
          </div>
          <div className="show-mobile">
              <SocialMedia />
          </div>
      </Layout>
  )
}

export default Main;
