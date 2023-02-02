import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome,AiOutlineSetting,AiOutlineUser,AiOutlinePlayCircle} from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs';
import {GrNotes} from 'react-icons/gr';
import {RiWechatLine} from 'react-icons/ri';
import '../Styles/header.css';

const Header = () => {
  return (
    <>
    <header className='header'>
      <nav>
      <div className='logo'>
          <Link to={"/"}>Port</Link>
        </div>
        <div className='menu'>
          <Link to={"/"}><AiOutlineHome/></Link>
          <Link to={"/service"}><AiOutlineSetting/></Link>
          <Link to={"/portfolio"}><BsBriefcase/></Link>
          <Link to={"/about"}><AiOutlineUser/></Link>
          <Link to={"/resume"}><GrNotes/></Link>
          <Link to={"/contact"}><RiWechatLine/></Link>
        </div>
        <div className='video'>
          <Link to={"video"}><AiOutlinePlayCircle/></Link>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header