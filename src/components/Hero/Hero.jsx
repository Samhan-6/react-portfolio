import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I am Samhan Shuhaib,</span> Full-stack Developer from Sri Lanka.</h1>
        <p>
            Intermediate MERN stack full-stack developer with a passion for crafting robust web applications.
        </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero