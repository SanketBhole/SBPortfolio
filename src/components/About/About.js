import React from 'react'
import '../About/About.css'
import Resume from '../../documents/Sanket_Bhole_Resume.pdf';
import myabtimg from '../../images/myabout.png'
import { motion } from "framer-motion";
import { ImProfile} from 'react-icons/im';
import {FaRegHandPointRight} from 'react-icons/fa'

const pageVariants = {
  in: {
    opacity: 1,
    transition: "opacity 10s ease-in",
    y:0
  },
  out: {
    opacity: 0,
    transition: "opacity 10s ease-in",
    y:"100%"
  },
}
export default function About() {
  return (
    <motion.div className='text-light'id='aboutsection' initial="out" animate="in" exit="out" variants={pageVariants}>
      <div className="container p-1">
        <div className="row p-5 justify-content-sm-center mainrow">
          <div className="col-sm-5 p-0 text-center">
            <div className="img-bg text-center">
              <img className='img-fluid' src={myabtimg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-sm-1 overflow-y" id="content">
            <h1 className="about-title">Summary</h1>
            <div className="about-item pb-0">
              <h3>Sanket Bhole</h3>
              <p>I am a Full Stack Developer who is passionate about learning new technologies and believes in the importance of continuous self-improvement and adaptability in the ever-evolving field of computer science. 
                My dedication to excellence, ability to work under tight deadlines, and commitment to staying up-to-date with the latest industry trends make me a valuable asset to any team.</p>
              <p/>
              <ul>
                <li>Hosuing Board Colony, Pithampur, MadhyaPradesh</li>
                <li>+91-78987 92951</li>
                <li>er.sanketbhole@gmail.com</li>
              </ul>
              <p><div className="p-2"><a className='profile' href={Resume} rel="noreferrer" target='_blank'><ImProfile/> View Full Resume <FaRegHandPointRight/></a></div></p>
            </div>

            <h1 className="about-title">Education</h1>
            <div className="about-item">
              <h3>Bachelor's Of Technology</h3>
              <h4>2019 - 2023</h4>
              <p><em>Sushila Devi Bansal College Of Technology, Indore, Madhya Pradesh</em></p>
              <p>I had completed my B.Tech in Computer Science and Engineering, where I achieved a commendable CGPA of 8.76.</p>
            </div>
            <div className="about-item">
              <h3>Senior Secondary</h3>
              <h4>2018 - 2019</h4>
              <p><em>Little Angels Higher Secondary School, MHOW, Madhya Pradesh</em></p>
              <p>Completed with CGPA of 7.6.</p>
            </div>
            <div className="about-item">
              <h3>Secondary</h3>
              <h4>2018 - 2019</h4>
              <p><em>Little Angels Higher Secondary School, MHOW, Madhya Pradesh</em></p>
              <p>Completed with CGPA of 7.6.</p>
            </div>
            <h1 className="about-title">Skills</h1>
            <div className="row">
              <div className="col-sm-6 progressbars">
                <div className="progress">
                  <span className="skill">HTML <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">CSS <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Bootstrap <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 progressbars">
                <div className="progress">
                  <span className="skill">React Js <i className="val">60%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">MySql <i className="val">70%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar"style={{width:'70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Core Java <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
