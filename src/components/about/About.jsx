import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>
                        Hey there, I'm Samhan Shuhaib, a seasoned full-stack developer with a keen focus on the MERN stack. With years of hands-on experience in React.js, Node.js, Express.js, and MongoDB, I thrive on transforming complex ideas into elegant, user-centric web solutions. 
                    </p>
                    <p>
                        From architecting intuitive front-end interfaces to fine-tuning back-end performance, I'm committed to delivering high-quality, scalable applications that leave a lasting impression. Let's connect and embark on a journey to bring your digital dreams to reality!
                    </p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: '40%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width: '50%'}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width: '80%'}}/></div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width: '55%'}}/></div>   
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About