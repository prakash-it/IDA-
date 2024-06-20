import React from 'react';
import logo from './img/IDA.png';
import '../styles/Nav.css'
import { NavLink} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

export default function Navbar() {

  return (
    <>
       <nav className='main-nav'>

        <div className='logo'>
        <img src={logo} alt='logo' className='img-logo'/>
        </div>

        <div className='nav-link'>
          <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/about'>ABOUT</NavLink></li>
            <li><NavLink to='/services'>SERVICES</NavLink></li>
            <li><NavLink to= '/clients'>CLIENTS</NavLink></li>
            <li><NavLink to='/careers'>CAREERS</NavLink></li>
            <li><NavLink to='/contact'>CONTACT US</NavLink></li>
          </ul>
        </div>

        <div className='nav-icons'>
          <ul className='social-icons'>
            <li><NavLink to="https://www.instagram.com/ida_tech_24?igsh=MTU5eTVuMHl1ZHZn&utm_source=qr" target='_blank' className="insta"><FaInstagram /></NavLink></li>
            <li><NavLink to="https://twitter.com/IDA_design2023" target='_blank' className='X'><FaXTwitter /></NavLink></li>
            <li><NavLink to="https://www.linkedin.com/company/industrial-design-animations/mycompany/?viewAsMember=true" target='_blank' className='lid'><CiLinkedin /></NavLink></li>
          </ul>
        </div>
       </nav>
    </>
  )
}
