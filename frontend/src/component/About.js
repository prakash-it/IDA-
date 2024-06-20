import React from 'react';
import img3 from './img/6650956.png';

import '../styles/About.css';
export default function About() {
  return (
    <>
    <div className='abo'>About us</div>
    <div className='about-container section-container'>
    <div className='about-content'>
      <h2 className='section-header'>IDA - AR, VR and MR Company in India</h2>
      <p className='section-subheader'>
      We IDA - Industrial Design and Animation is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and elevate your Insustry and Business With Immersive Technical solution with extensiveand wide range of Imagination that becomes Possible.

We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality ). To reshape the entire future.
      </p>
  
    </div>
    <div className='about-img'>
      <img src={img3} alt='image' className='img'/>
    </div>
    </div>
    </>
  )
}
