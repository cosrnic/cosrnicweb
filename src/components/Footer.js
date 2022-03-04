import React from 'react'
import './Footer.css'
import { BsTwitter, BsTwitch, BsGithub, BsYoutube } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="main-footer">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Cosmic | <BsTwitter />@CosmicVFX_ | 
            <BsTwitch />coosmlc | <BsGithub />cosrnic | <BsYoutube />CosmicMoon
          </p>
        </div>
      </div>
  )
}


export default Footer