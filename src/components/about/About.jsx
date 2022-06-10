import React from 'react';
import './about.css';
import Me from '../../assets/me2.jpg';
import {RiAwardFill} from 'react-icons/ri';
import {SiPolymerproject} from 'react-icons/si';

function About() {
  return (
    <section id="about">
      <h5>Hola Folk👋</h5>
      <h2>Nice to Meet you</h2> 
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me_image">
          <img src={Me} alt="about image" />
        
        </div>
        </div> 
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <RiAwardFill className="about_icon"/>
              <h5>Experience</h5>
              <small>Exploring and Learning...</small>
            </article>
            
            <article className="about_card">
            <SiPolymerproject className="about_icon"/>
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>Hey! I'm a tech enthusiast. In my free times I love to sketch my thoughts through words. I wonder looking straight up to the night sky,how enourmous amount of secrets it is hiding. I turn over pages to interpret the logics waiting to be unleased. Just like my name suggests, my exploration continues forever.</p>
          <a href="#contact" target="_blank" className='btn btn-primary'>Let's Connect</a>
        </div>
        </div>
      </section>
  )
}

export default About