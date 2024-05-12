import React, { useState } from 'react'
import './NavBar.css'
import logo from "../../assets/logo.svg"
import underline from '../../assets/nav_underline.svg'

const NavBar = () => {

  const [menu, setMenu] = useState('home')
  
  return (
    <div className='navbar'>
        <img src={logo} alt="" />

        <ul className="nav-menu">
            <li><p onClick={() => setMenu('home')}>Home</p> {"home" === menu ? <img src={underline} alt='' /> : <></>} </li>
            <li><p onClick={() => setMenu('about')}>About Me</p> {"about" === menu ? <img src={underline} alt='' /> : <></>} </li>
            <li><p onClick={() => setMenu('service')}>Services</p> {"service" === menu ? <img src={underline} alt='' /> : <></>} </li>
            <li><p onClick={() => setMenu('work')}>Portfolio</p> {"work" === menu ? <img src={underline} alt='' /> : <></>} </li>
            <li><p onClick={() => setMenu('contact')}>Contact</p> {"contact" === menu ? <img src={underline} alt='' /> : <></>} </li>
        </ul>

        <div className="nav-connect">
            Connect 
        </div>
    </div>
  )
}

export default NavBar