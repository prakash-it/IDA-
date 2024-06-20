import React, { useState } from 'react';
import axios from 'axios'
import '../styles/Contact.css';
import email from './img/email.png'
import location from './img/location.png'
import phone from './img/phone.png'

export default function Contact() {

  const[name,setName] = useState('')
  const[emails,SetEmails]= useState('')
  const[phones, setPhones]= useState('')
  const[msg, setMsg]= useState('')


  const handelsubmit = (e)=>{
    e.preventDefault()
    const formData={
      username : name,
      email : emails,
      phone : phones,
      msg : msg
    }
    setName('');
    SetEmails('');
    setPhones('');
    setMsg('');

    axios.post(`http://localhost:1516/User/post`,formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  return (
    <>
           <div className="containerrs">
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="" />
              <p> Anna Nagar,Chennai,TamilNadu-600040</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>info@idacreations.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

  
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handelsubmit}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder='Username' value={name}  onChange={(e)=> { setName(e.target.value)}}/>
        
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder='Email' value={emails} onChange={(e)=>{SetEmails(e.target.value)}}/>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder='Phone' value={phones} onChange={(e)=>{setPhones(e.target.value)}} />
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message' value={msg} onChange={(e)=>{setMsg(e.target.value)}}></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
