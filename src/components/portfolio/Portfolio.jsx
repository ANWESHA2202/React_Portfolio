import React from 'react'
import './portfolio.css'
import pro1 from '../../assets/Techwhiz.png';
import pro2 from '../../assets/chit-chat.png';
import pro3 from '../../assets/blog.png';
import pro4 from '../../assets/parikalan.png';
import pro5 from '../../assets/simon.png';
import pro6 from '../../assets/to-do.png';

function Portfolio() {
  const data=[
    { 
      id:1,
      image: pro2,
      title:'a chit-chat webapp',
      github:'https://github.com/ANWESHA2202/Chit-chat-app'
    },{
      id:2,
      image: pro3,
      title:'a blog website where mongoDB is used as database.',
      github:'https://github.com/ANWESHA2202/BlogWebsite'
    },{
      id:3,
      image: pro4,
      title:'the website for college computer science departmental society.',
      github:'https://github.com/ANWESHA2202/Parikalan-website'
    },{
      id:4,
      image: pro5,
      title:'the simon game created using vanilla js',
      github:'https://github.com/ANWESHA2202/Simon-Game'
    },{
      id:5,
      image: pro6,
      title:'a to-do-list webapp.',
      github:'https://github.com/ANWESHA2202/To-Do-List'
    },{
      id:6,
      image: pro1,
      title:' the website for college I.T. Society.',
      github:'https://github.com/Hardikbhanot/TechWhiz'
    }
  ]
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={image} alt={title} />
                </div>
                <h5>{title}</h5>
                <div className="portfolio_cta"><a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a></div>
            
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio