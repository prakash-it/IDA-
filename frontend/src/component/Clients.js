import React from 'react';
import '../styles/Services.css';
import sraysLogo from './img/srays.jpg'
import vultureLinesLogo from './img/vulturelines.jpg';
import wowHrLogo from './img/wowhr.jpg';
import oneYesLogo from './img/oneyes.jpg';
import exatechLogo from './img/Exatech.jpg';
import iiecLogo from './img/1iiec.png';
import bigEyeLogo from './img/bigeyeglobal.jpg';
import blitzworkLogo from './img/bltzwork.jpeg';
import digitallyvibedLogo from './img/digitallyvibed.jpg';
import linesSoftTechLogo from './img/linessofttech.jpg';
import thozhilLogo from './img/thozhil_img.jpg';
import winWinWebLogo from './img/Winwinweb.jpg';

export default function Clients() {
  return (
    <>
     
      <div className="container mt-3 pt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 style={{ color: '#3e1c67' }}><strong>Our Clients</strong></h3>
            <p>
              <small>
                Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their
                unique needs, tailoring solutions, and fostering long-term relationships.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="container logos">
        <div className="our-client mt-5 mb-5 logos-slide">
          <div className="our-client-box">
            <img src={sraysLogo} alt="Srays" />
          </div>
          <div className="our-client-box">
            <img src={vultureLinesLogo} alt="Vulture Lines" />
          </div>
          <div className="our-client-box">
            <img src={wowHrLogo} alt="Wow HR" />
          </div>
          <div className="our-client-box">
            <img src={oneYesLogo} alt="One Yes" />
          </div>
          <div className="our-client-box">
            <img src={exatechLogo} alt="Exatech" />
          </div>
          <div className="our-client-box">
            <img src={iiecLogo} alt="IIEC" />
          </div>
          <div className="our-client-box">
            <img src={bigEyeLogo} alt="Big Eye" />
          </div>
          <div className="our-client-box">
            <img src={blitzworkLogo} alt="Blitzwork" />
          </div>
          <div className="our-client-box">
            <img src={digitallyvibedLogo} alt="Digitally Vibed" />
          </div>
          <div className="our-client-box">
            <img src={linesSoftTechLogo} alt="Lines Soft Tech" />
          </div>
          <div className="our-client-box">
            <img src={thozhilLogo} alt="Thozhil" />
          </div>
          <div className="our-client-box">
            <img src={winWinWebLogo} alt="Win Win Web" />
          </div>
        </div>
      </div>
    </>
  );
}
