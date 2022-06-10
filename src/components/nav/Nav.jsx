import React from 'react'
import './nav.css';
import {BiHomeSmile} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {FaLaptopCode} from 'react-icons/fa';
import {RiServiceLine} from 'react-icons/ri';
import {MdConnectWithoutContact} from 'react-icons/md';
import {useState} from 'react';
function Nav() {
  const {activeNav,setActiveNav}=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#about' ? 'active' : ''}><BiHomeSmile/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><FaLaptopCode/></a>
      <a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><MdConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav