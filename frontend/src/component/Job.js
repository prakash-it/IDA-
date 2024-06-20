import React, { useState } from 'react';
import '../styles/Job.css';
import axios from 'axios';

export default function Job() {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [passoutyear, setPassoutyear] = useState('');
  const [job, setJob] = useState('');
  const [percentage, setPercentage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
      const appdata ={
        username: firstname,
        email:email,
        phone : phoneno,
        year : passoutyear,
        job : job,
        percentage: percentage
      }

      setFirstname('')
      setEmail('')
      setPhoneno('')
      setPassoutyear('')
      setJob('')
      setPercentage('')

  
      axios.post(`http://localhost:1516/job/post`,appdata)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  };

  return (
    <>
      <div className='dev'>
        <div className="form-container">
          <h2>Professional Form</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                type="text"
                id="phoneno"
                name="phoneno"
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passoutyear">Pass Out Year</label>
              <input
                type="number"
                id="passoutyear"
                name="passoutyear"
                value={passoutyear}
                onChange={(e) => setPassoutyear(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="job">Job Section</label>
              <select
                id="job"
                name="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="fullstack development">Fullstack Development</option>
                <option value="ui/ux">UI/UX</option>
                <option value="gamedeveloper">Game Developer</option>
                <option value="motion developer">Motion Developer</option>
                <option value="videoediting">Video Editing</option>
                <option value="ar/vr">AR/VR</option>
                <option value="academic alliance">Academic Alliance</option>
                <option value="cg/vfx">CG/VFX</option>
                <option value="generative ai engineer">Generative AI Engineer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="percentage">Higher Education Percentage</label>
              <input
                type="number"
                step="0.01"
                id="percentage"
                name="percentage"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="fileupload">File Upload</label>
              <input
                type="file"
                id="fileupload"
                name="fileupload"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div> */}

            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
