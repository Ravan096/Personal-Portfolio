import React from 'react';
// import {Typewriter} from 'typewriter-effect';
import '../Styles/home.css'
import imgsvg from "../Assets/svg.png";
import photobg from "../Assets/photo.png";
import thumb from "../Assets/thumb.png";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const Home = () => {
  const [text]= useTypewriter({
    words: ['Web Developer','React Developer','Full Stack Developer'],
    loop:{},
    typeSpeed:50,
    deleteSpeed:50,
  });

  return (
    <div className='home'>
      <div className="webkit">
        <h1>welcome</h1>
      </div>
      <div className='div1'>
      <div>
      <h1>Hey <img src={thumb} alt="" /> I'm Lakshman</h1>
      <h3>{text} <span style={{color:'green'}}><Cursor/></span></h3>
      <button className='resumebtn'>My Resume</button>
      </div>
      </div>
      <div className='div2'>
        <img src={imgsvg} className='homesvg' alt=""/>
        <img src={photobg} alt="" className="photo"/>
      </div>
    </div>
  )
}

export default Home
