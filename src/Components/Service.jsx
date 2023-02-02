import React from 'react';
import serv1 from '../Assets/serv1.png';
import serv2 from '../Assets/serv2.png';
import serv3 from '../Assets/serv3.png';
import '../Styles/service.css';

const Service = () => {
  return (
    <section className='service'>
      <div className='service_div1'>
        <h3>My Expertise</h3>
        <h1>What I Do</h1>
      </div>
      <div className="service_div2">
        <div className='service_div2_container'>
          <img src={serv1} alt="" />
          <h2>Website Design</h2>
          <p>Continue indulged speaking the was <br />
          horrible for domestic position. Seeing get <br />
          rather her you not esteem men settle is <br />
          genius take excuse. Deal say over you age <br />
          comparison new ham melancholy.</p>
        </div>
        <div className='service_div2_container'>
          <img src={serv2} alt="" />
          <h2>App Development</h2>
          <p>Continue indulged speaking the was <br />
          horrible for domestic position. Seeing get <br />
          rather her you not esteem men settle is <br />
          genius take excuse. Deal say over you age <br />
          comparison new ham melancholy.</p>
        </div>
        <div className='service_div2_container'>
          <img src={serv3} alt="" />
          <h2>UX/UI Design</h2>
          <p>Continue indulged speaking the was <br />
          horrible for domestic position. Seeing get <br />
          rather her you not esteem men settle is <br />
          genius take excuse. Deal say over you age <br />
          comparison new ham melancholy.</p>
        </div>
      </div>
    </section>
  )
}

export default Service