import React from 'react';
import '../styles/Services.css';
import img1 from './img/p-img.jpg';
import img2 from './img/p-img2.jpg';
import img3 from './img/p-img3.jpeg';
import photo from './img/computer.png';
import photo2 from './img/cpu.png';
import photo3 from './img/film.png';
import photo4 from './img/game.png';
import photo5 from './img/pro.png';
import photo6 from './img/studio.png';
import photo7 from './img/team.png';
import photo8 from './img/ux.png';
import photo9 from './img/vid.png';
import photo10 from './img/visual.png';
import photo11 from './img/vr.png';
import photo12 from './img/work.ong';

export default function Services() {
  return (
    <>
      
      <div className="container pt-3">

  <div className="row mt-5">
    <div className="col-lg-12 text-center">
    <h3 className='services'>Our Services</h3>
      <p>Reinvent your industry with our industrial solutions</p>
    </div>
  </div>
</div>

<div className="container our-services p-lg-3 ps-lg-5 ps-md-5">
  <div className="row p-lg-3 p-md-3 p-0">
    <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
      <a href="#">
        <img src="img/game-development_2029515.png" alt="" width="50px"/>
        <p>Game Development</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
      <a href="#">
        <img src="img/cpu_888995.png" alt="" width="50px"/>
        <p>Generatives AI</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-b">
      <a href="#">
        <img src="img/3d-model_14189680.png" alt="" width="50px"/>
        <p>3D Modeling/Rendering</p>
      </a>
    </div>
  </div>
  <div className="row p-lg-3 p-md-3 p-0">
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/computer_10940047.png" alt="" width="50px"/>
        <p>2D/3D Animation</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/workplace_8170939.png" alt="" width="50px"/>
        <p>Motion Graphics</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/visual-effect_3879988.png" alt="" width="50px"/>
        <p>VFX</p>
      </a>
    </div>
  </div>
  <div className="row p-lg-3 p-md-3 p-0">
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/virtual-reality_1377790.png" alt="" width="50px"/>
        <p>AR/VR/MR/XR</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-r hidden-1">
      <a href="#">
        <img src="img/studio_9200070.png" alt="" width="50px"/>
        <p>Virtual Production</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/production_13136249.png" alt="" width="50px"/>
        <p>CG</p>
      </a>
    </div>
  </div>
  <div className="row p-lg-3 p-md-3 p-0">
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/ux-design_7889802.png" alt="" width="50px"/>
        <p>UI/UX</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/team_2083290.png" alt="" width="50px"/>
        <p>Academic Alliances</p>
      </a>
    </div>
    <div className="col-lg-4 col-md-12 p-md-2 hidden-1">
      <a href="#">
        <img src="img/film-editing_4035077.png" alt="" width="50px"/>
        <p>Video Editing</p>
      </a>
    </div>
  </div>
</div>



      <div className='project'>
        <div className="facilities">
          <h3 className='services'>Our Projects</h3>
          <p>Have a sneak peak at the Arts we Crafted</p>
          <div className="roww">
            <div className="facilities-col">
              <div className="img-container">
                <img src={img2} alt="Precision Strike" />
              </div>
              <h3>Precision Strike</h3>
              <p>Mobile shooting game
              </p>
            </div>

            <div className="facilities-col">
              <div className="img-container">
                <img src={img1} alt="Turbo Thurst" />
              </div>
              <h3>Turbo Thurst</h3>
              <p>Mobile legends AAA title racing mobile game
              </p>
            </div>

            <div className="facilities-col">
              <div className="img-container">
                <img src={img3} alt="Startup Fest Expo" />
              </div>
              <h3>Startup Fest Expo</h3>
              <p>Oneyes startup fest expo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
