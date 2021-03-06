import React from 'react'
import Main from '../main/Main'
import Navbar from '../NavBar/Navbar'
import Projects from '../projects/Projects'
import extraboomerangs from '../main/images/extraboomerangsmain.png'
import musicplayer from '../main/images/musical_note.ico'
import {Route, Link} from 'react-router-dom'
import { BsTwitter, BsTwitch, BsGithub, BsYoutube } from 'react-icons/bs'
import './FutureMain.css'
function FutureMain() {
return (
    <div className="futuremain">
        <div className="custom-shape-divider-top-1645641317">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <Navbar />
        {/* <Main />
        <Projects /> */}
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <footer>
          <div className='footer-content'>
            <p>©Cosmic</p><p className='twitter'><BsTwitter />@CosmicVFX_</p><p className='twitch'><BsTwitch />coosmlc</p><p className='twitch'><BsGithub />cosrnic</p><p><BsYoutube />CosmicMoon</p>
          </div>
          
        </footer>
    </div>
);
}

export default FutureMain