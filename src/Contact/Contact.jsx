import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };









  const form = useRef();
  const [done, setDone] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5naz05', 'template_prby4pf', form.current, 'wNKUDWsWhwXQwh04H')
      .then((result) => {
        console.log(result.text);
        setDone(true);

        setFormData({
          from_name: '',
          from_email: '',
          from_subject: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="contact section">
      <h2 className="section--title">Get In <span style={{ color: "var( --purple-color" }} >Touch</span></h2>
      <div className="contact--container container">
        <div className="contact--data">
          <h3 className="contact--title">Don't be Shy !</h3>
          <p className="contact--desc">
            Feel free to get in touch with us .We are always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions..
          </p>
          <div className="contact--info">
            <div className="info--item">
              <FaEnvelopeOpen className='info--icon' />
              <div>
                <span className="info--title">Mail us</span>
                <h4 className="info--desc">betacommunes@gmail.com</h4>
              </div>
            </div>
            <div className="info--item">
              <FaPhoneSquareAlt className='info--icon' />
              <div>
                <span className="info--title">Contact Us</span>
                <h4 className="info--desc">+923271519404</h4>
              </div>
            </div>
          </div>


          <div className="contact--socials">
            <a href="https://www.facebook.com/profile.php?id=61554057222085&mibextid=zLoPMf" target="_blank" className="contact--social--links">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/+923271519404" target="_blank" className="contact--social--links">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/betacommunes/" target="_blank" className="contact--social--links">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="contact--social--links">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <form className="contact--form" ref={form} onSubmit={sendEmail} >
          <div className="form--input-group">
            <div className="form--input-div">
              <input type="text"
                placeholder='Your Name'
                name='from_name'
                value={formData.from_name}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
            <div className="form--input-div">
              <input type="email"
                placeholder='Your Email'
                name='from_email'
                value={formData.from_email}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
            <div className="form--input-div">
              <input type="text"
                placeholder='Your Subject'
                name='from_subject'
                value={formData.from_subject}
                onChange={handleInputChange}
                className="form--control"
              />
            </div>
          </div>

          <div className="form--input-div">
            <textarea
              className="form--control textarea"
              placeholder='Your Message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className='contact-button' type='submit' >
            Send Message
          </button><br />
          <span >{done && "Thanks for contacting me !"}</span>
        </form>
      </div>
    </section>
  )
}

export default Contact   