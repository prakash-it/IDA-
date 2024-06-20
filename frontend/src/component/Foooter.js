import React from 'react';
import '../styles/Footer.css';
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


export default function Foooter() {
  return (
    <>
     <div className='footer'>
      <div className='section-container footer-container'>
        <h4>IDA creaction</h4>
        <div className='footer-socials'>
           <NavLink to="https://www.instagram.com/ida_tech_24?igsh=MTU5eTVuMHl1ZHZn&utm_source=qr" target='_blank' className="insta"><FaInstagram /></NavLink>
            <NavLink to="https://twitter.com/IDA_design2023" target='_blank' className='X'><FaXTwitter /></NavLink>
            <NavLink to="https://www.linkedin.com/company/industrial-design-animations/mycompany/?viewAsMember=true" target='_blank' className='lid'><CiLinkedin /></NavLink>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          aperiam magni sequi illo omnis eum id, perspiciatis doloribus qui
          commodi asperiores quas similique! Rerum facilis harum repellat iusto,
          sapiente nemo.
        </p>

        <ul className='footer-nav'>
            <li><NavLink to='/' className='footer-link'>HOME</NavLink></li>
            <li><NavLink to='/about' className='footer-link'>ABOUT</NavLink></li>
            <li><NavLink to='/services' className='footer-link'>SERVICES</NavLink></li>
            <li><NavLink to= '/clients' className='footer-link'>CLIENTS</NavLink></li>
            <li><NavLink to='/careers' className='footer-link'>CAREERS</NavLink></li>
            <li><NavLink to='/contact' className='footer-link'>CONTACT US</NavLink></li>
          </ul>
      </div>
     </div>
     <div className='footer-bar'>Copyright © 2024 . All rights reserved.</div>
    </>
  )
}
