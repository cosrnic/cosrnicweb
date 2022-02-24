import React from 'react'
import './Main.css'
import extraboomerangs from './images/extraboomerangsmain.png'
import musicplayer from './images/musical_note.ico'
import logo from '../NavBar/logo.png'
function Main() {
  return (
      
    <div className='main'>
      <div className="custom-shape-divider-top-1645641317">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div className="custom-shape-divider-bottom-1645708344">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="content">
            <h2 className='title'>Introduction</h2>
            <div className="text">
              <p>Hello! I am Cosmic! I want to become a Web Developer and Designer.</p>
            </div>
            <img src={logo} alt='logo' className='octo'></img>
            <h2 className='title'>Main Projects</h2>
            <a href='https://github.com/cosmllc/ExtraBoomerangs' target='_blank' rel="noreferrer">
              <img className='extraboomerangs' src={extraboomerangs} alt="extraboomerangs"></img>
            </a>
            <a href='https://acatiadroid.github.io/music-player' target='_blank' rel="noreferrer">
              <img className='musicplayer' src={musicplayer} alt="musicplayer"></img>
            </a>
        </div>
        
        
        
        
        
    </div>
  )
}

export default Main