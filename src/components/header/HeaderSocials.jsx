import React from 'react';
import {FiLinkedin} from 'react-icons/fi/';
import {GoMarkGithub} from 'react-icons/go/';
import {BsMedium} from 'react-icons/bs/';


function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/anwesha-sanyal/" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/ANWESHA2202" target="_blank" rel="noopener noreferrer"><GoMarkGithub/></a>
        <a href="https://medium.com/@anwesha-sanyal22" target="_blank" rel="noopener noreferrer"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials