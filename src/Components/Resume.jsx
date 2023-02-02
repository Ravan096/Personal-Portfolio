import React from 'react';
import '../Styles/resume.css';
import {IoLogoReact,IoLogoHtml5} from 'react-icons/io5';
import {TiTick} from 'react-icons/ti';
import mic from '../Assets/mic.webp';

const Resume = () => {
  return (
    <section className='resume'>
      <div className='resumediv1'>
      <button>Biography -- 01</button>
      <button>Biography -- 02</button>
      <button>Biography -- 03</button>
    </div>
    <div className='resumediv2'>
      <ul>
        <li><h5>Name</h5><p> Lakshman Gupta</p></li>
        <li><h5>Age</h5><p>23</p></li>
        <li><h5>Email</h5><p>guptalakshman96.lg@gmail.com</p></li>
        <li><h5>Skype</h5><p>lakshman96</p></li>
        <li><h5>Birthday</h5><p>00March, 2000</p></li>
        <li><h5>Address</h5><p>Street xyz NY1234 INDIA</p></li>
        <li><h5>Phone</h5><p>+(91)1234567890</p></li>
        <li><h5>Freelance</h5><p>Available</p></li>
      </ul>
    </div>


    <div className="pricing">
      <div className="pricing1">
        <div className="pricing1_child1">
          <h5>Pricing</h5>
          <h1>The best pricing plans <br /> to get your best</h1>
        </div>

        <div className="pricing1_child2">
          <h4>Save up to <strong>50%</strong> with <br /> your every order
          </h4>
          <img src={mic} alt="" />
        </div>
      </div>


      <div className="pricing2">
        <div className="pricing2_child1">
          <div className="pricing2_child1_div1">
          <h2>React Development</h2>
          <ul>
            <li><TiTick/> 1 Page with Elementor</li>
            <li><TiTick/> Design Customzation</li>
            <li><TiTick/> Responsive Design</li>
          </ul>
          <button>Order Now</button>
          </div>
          <div className="pricing2_child1_div2">
            <h2><sup>$</sup> 48</h2>
            <IoLogoReact/>
          </div>
        </div>


        <div className="pricing2_child2">
        <div className="pricing2_child2_div1">
          <h2>Static frontend design</h2>
          <ul>
            <li> <TiTick/> 2 Page with Bootstrap5</li>
            <li><TiTick/> Design implement</li>
            <li><TiTick/> Responsive Design</li>
          </ul>
          <button>Order Now</button>
          </div>

          <div className="pricing2_child2_div2">
            <h2><sup>$</sup> 24</h2>
            <IoLogoHtml5/>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Resume