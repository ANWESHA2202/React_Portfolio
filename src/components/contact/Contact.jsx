import React from 'react';
import './contact.css';
import {MdMarkEmailRead} from 'react-icons/md';
import {SiMinutemailer} from 'react-icons/si';
import {RiInstagramFill} from 'react-icons/ri';

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch🤝</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMarkEmailRead className='contact_option_icon'/>
            <h4>Email</h4>
            <h6>anwesha.sanyal22@gmail.com</h6>
            <a href="mailto:anwesha.sanyal22@gmail.com" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className="contact_option">
            <SiMinutemailer className='contact_option_icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/anwesha-sanyal/" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
          <article className="contact_option">
            <RiInstagramFill className='contact_option_icon'/>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/reverberation_of_souls/" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
       
      </div>
    </section>
  )
}

export default Contact