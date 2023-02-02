import React from 'react';
import "../Styles/portfolio.css";
import port1 from '../Assets/port1.jpg';
import port2 from '../Assets/port2.jpg';
import port3 from '../Assets/port3.jpg';
import port4 from '../Assets/port4.jpg';
import port5 from '../Assets/port5.jpg';
import port6 from '../Assets/port6.jpg';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="portfolio1">
        <div className="portfolio1_child1">
          <h5>Recent Work</h5>
          <h1>Look at my portfolio and <br />
          give me your feedback</h1>
        </div>
        <div className="portfolio1_child2">
        <div className='portfolio1_child2_div1'><h1>10</h1>
        <p>Completed Project</p>
        </div>

        <div className='portfolio1_child2_div2'><h1>95%</h1>
        <p>Positive Rating</p></div>
        </div>
      </div>



      <div className="portfolio2">
        <Container img={port1}/>
        <Container img={port2}/>
        <Container img={port3}/>
        <Container img={port4}/>
        <Container img={port5}/>
        <Container img={port6}/>
      </div>
    </section>
  )
}

export default Portfolio




const Container=({img})=>{
  return (
    <div className='portimg'>
       <img src={img} alt="" />
    </div>
  )
}