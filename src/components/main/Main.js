import React from 'react'
import './Main.css'
import extraboomerangs from './images/extraboomerangsmain.png'
import musicplayer from './images/musical_note.ico'
import logo from '../NavBar/logo.png'
import Navbar from '../NavBar/Navbar'
function Main() {
  return (
      
    <div className='main'>
        <div className="content">
            <h2 className='title'>Introduction</h2>
            <div className="text">
              <p>Hello! I am Cosmic! I want to become a Web Developer and Designer.</p>
            </div>
            <center><img src={logo} alt='logo' className='octo'></img></center><br/><br />
            <h2 className='title'>Main Projects</h2>
            <a href='https://github.com/cosmllc/ExtraBoomerangs' target='_blank' rel="noreferrer">
              <img className='extraboomerangs' src={extraboomerangs} alt="extraboomerangs"></img>
            </a>
            <a href='https://acatiadroid.github.io/music-player' target='_blank' rel="noreferrer">
              <img className='musicplayer' src={musicplayer} alt="musicplayer"></img>
            </a>
            <p className='mp-text'>(Web Developer)</p>
        </div>
        
        
        
        
        
    </div>
  )
}

export default Main