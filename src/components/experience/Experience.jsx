import React from 'react'
import './experience.css';
import {FaCheckDouble} from 'react-icons/fa';
function Experience() {
  return (
    <section id="experience">
      <h5>Skills I've</h5>
      <h2>My Experiences</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </div>
              </article>
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </div>
              </article>
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>JAVASCRIPT</h4>
              <small className="text-light">Beginner</small>
            </div>
              </article>
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>REACT</h4>
              <small className="text-light">Beginner</small>
            </div>
              </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>Node Js</h4>
              <small className="text-light">Beginner</small>
            </div>
              </article>
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
            </div>
              </article>
            <article className="experience_details">
              <FaCheckDouble className='experience_details-icon'/>
              <div><h4>MySql</h4>
              <small className="text-light">Beginner</small>
            </div>
              </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience