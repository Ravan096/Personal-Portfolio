import React from 'react';
import {FaReact} from 'react-icons/fa';
import {DiHtml53DEffects} from 'react-icons/di';
import '../Styles/about.css';
import photo from '../Assets/photo.png';

const About = () => {
  return (
    <section className='about'>
      <div className="aboutchild">
        <div className="aboutchild1">
          <div>
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="aboutchild2">
          <h3>About Me</h3>
          <h1>I can develop <br /> that help people</h1>
          <p> Hi, my name is Lakshman Gupta and I begun using React when
            it first began. I've <br /> spen most of my waking hours for 
            the last 1 year desinging, programming and <br /> operating 
            React sites. One of my specialities is taking an idea from
            scratch <br /> and creating a full-fledged platform. I go 
            beyond to produce sites with a unique.
          </p>
          <div className="skill_list">
            <ul>
              <li>
                <FaReact/>
                <h1>React Developer</h1>
                <h3>Top Rated - Upwork</h3>
              </li>
              <li>
                <DiHtml53DEffects/>
                <h1>Html Developer</h1>
                <h3>Level Two Seller - Fiverr</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About