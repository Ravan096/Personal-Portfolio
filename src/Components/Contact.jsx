import React from 'react';
import "../Styles/contact.css";
import {MdOutlineMailOutline} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';
import {FaHeadphonesAlt} from 'react-icons/fa';


const Contact = () => {
  return (
    <div className='container'>
      <div className="webkit_1">
        <h1 className='webkit_1'>contact</h1>
      </div>
      <section className='section_one'>
        <div className='contact'>
          <h1>Lets talk?</h1>
          <p>it's about the humans behind a brand and those experiencing it,
            but we are <br /> right there. In the middle perfomance quick.
          </p>
          <input type="text" placeholder='Name'/>
          <br />
          <input type="email" placeholder='Email*'/>
          <input type="mobile" placeholder='Mobile No.' />
          <input type="textarea"  placeholder='Tell Us About Project*'/>
          <button className='sendbtn'>Send Message</button>
        </div>
      </section>

      <section className='section_two'>
        <div className='contact2'>
          <ul>
          <li>
            <div className='svg'>
            <MdOutlineMailOutline/>
            </div>
            <div className="content">
            <h3>Our Email</h3>
            <p>info@mail.com</p>
            <p>info@mail.com</p>
            </div>
          </li>
          <li>
            <div className='svg'>
            <SlLocationPin/>
            </div>
            <div className="content">
            <h3>Address</h3>
            <address>
              xyz street, xxxxxx, xxxxxx,
              xxxxxxxxxxxx
            </address>
            </div>
          </li>
          <li>
            <div className='svg'>
            <FaHeadphonesAlt/>
            </div>
            <div className="content">
            <h3>Phone</h3>
            <p>+910000000000</p>
            <p>+910000000000</p>
            </div>
          </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact