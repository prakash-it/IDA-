import React from 'react';
import '../styles/Careers.css';
import { useNavigate } from 'react-router-dom';

export default function Careers() {

    const nav = useNavigate()

    const handlebtn=()=>{
        nav('/Job-application');
    }
    return (
        <>
            <div className='pops'>
                <h1 className='check'> Join Our Team</h1>
                <div className="come">
                    <div className="coord" onClick={handlebtn}>
                        <h2>Full Stack Management </h2>
                        <p>
                        Handles all aspects of software development, from conception and design to implementation and deployment, ensuring comprehensive and robust solutions.</p>
                    </div>
                    <div className="coord" onClick={handlebtn} >
                        <h2> UI/UX </h2>
                        <p>
                           
Designs intuitive user interfaces and enhances user experiences through thoughtful interaction design and user-centered principles.
                        </p>
                    </div>
                    <div className="coord" onClick={handlebtn}>
                        <h2> Game Developer </h2>
                        <p>
                        Creates engaging interactive experiences by designing and coding video games for diverse platforms. Tests and refines gameplay mechanics to ensure optimal user engagement and experience. </p>
                    </div>

                    <div className="coord" onClick={handlebtn} >
                        <h2>Motion designer </h2>
                        <p>
                        Creates animated graphics and visual effects for multimedia projects, enhancing storytelling through motion.</p>
                    </div>
                    <div className="coord" onClick={handlebtn}>
                        <h2> Video Editing</h2>
                        <p>
                            
Edits and assembles video footage to create polished, engaging final products for various media platforms.</p>
                    </div>
                    <div className="coord" onClick={handlebtn}>
                        <h2> AR/VR/MR/XR </h2>
                        <p>
                        Develops and implements immersive technologies, including augmented, virtual, mixed, and extended reality experiences.</p>
                    </div>
                    <div className="coord" onClick={handlebtn}>
                        <h2> Academic Alliance </h2>
                        <p>
                            
Builds and manages partnerships between educational institutions to enhance collaborative academic programs and research initiatives.</p>
                    </div>
                    <div className="coord" onClick={handlebtn} >
                        <h2> CG / VFX Generalist </h2>
                        <p>
                            Creates and integrates visual effects and CGI across various aspects like modeling, texturing, and animation for media projects.

                        </p>
                    </div>
                    <div className="coord" onClick={handlebtn}>
                        <h2>Generative Ai Engineer</h2>
                        <p>
                            Designs and implements AI models and systems, specializing in creating and optimizing generative algorithms for producing synthetic data, content, or other outputs.</p>
                    </div>
                </div>
            </div>


        </>
    )
}
