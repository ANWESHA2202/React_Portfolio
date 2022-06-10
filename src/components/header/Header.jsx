import React from 'react';
import './header.css';
import CTA from "./CTA";
import me from '../../assets/me_nbg.png';
import HeaderSocials from './HeaderSocials';
import Typed from 'react-typed';
function Header() {
  
  return (
    <header>
    
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2 id="sentence" class="sentence">Anwesha Sanyal...</h2>
        
        <Typed className="text-light" strings={['A FullStack Developer','A Content Writer','A Podcaster','A Freelancer']} typeSpeed={40} backSpeed={60} loop></Typed>
        <span class="input-cursor"></span>
        
        
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header