import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import logo from './logo.png'
import './Navbar.css'
import {Route, Link} from 'react-router-dom'

class Navbar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Cosmic <img src={logo} alt="logo" className='vsc-octo'></img></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li className='nav-links'><Link to={item.url}>{item.title}</Link></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar