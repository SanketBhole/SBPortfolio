import React from 'react'
import '../Home/Home.css'
import Resume from '../../documents/Sanket_Bhole_Resume.pdf';
import { motion } from "framer-motion";
import{FaInstagram,FaLinkedin,FaGithub,FaFacebookSquare} from 'react-icons/fa'
import { ImProfile} from 'react-icons/im';
import myImg from '../../images/SbImage.png'
import locationlogo from '../../images/locationicon.png'
import gmaillogo from '../../images/gmailicon.png'
import phonelogo from '../../images/phoneicon.png'

const pageVariants = {
  initial: {
    opacity: 0,
    transition: "opacity 1000ms ease-in",
  },
  in: {
    opacity: 1,
    transition: "opacity 1000ms ease-in",
  },
  out: {
    opacity: 0,
    transition: "opacity 1000ms ease-in",
  },
}

export default function Home() {
  return (
    <>
    <motion.div className="container center" initial="initial" animate="in" exit="out" variants={pageVariants}>
      <div className="row justify-content-center m-2 outerdiv">
        <div className="col-12 col-sm-12 col-md-4 align-self-center text-center p-3">
          <img className='myimg' src={myImg} width={200} height={200} alt=""/>
        </div>
        <div className="col-12 col-sm-12 col-md-6 align-self-center  home p-2">
          <h1 className='display-5' style={{fontWeight:'bold'}}>Hi, I'm <span className='myName'> SANKET </span><span className="handwave">🤚</span></h1>
          <h1 className='display-7' style={{fontWeight:'bold'}}>I'm a Full Stack Developer.</h1>
          <ul className="list">
            <li><img src={locationlogo} alt="location"/>Housing Board Colony, Pithampur, MadhyaPradesh</li>
            <li><img src={phonelogo}alt="mobile"/> +91-78987 92951</li>
            <li><img src={gmaillogo} alt="gmail"/> er.sanketbhole@gmail.com</li>
          </ul>
          <div className="row text-center p-2">
            <div className="col"><a className='profile' href={Resume} rel="noreferrer" download><ImProfile/></a></div>
            <div className="col"><a className='git' href="https://github.com/SanketBhole" target='_blank' rel='noreferrer'><FaGithub/></a></div>
            <div className="col"><a className='linkedin' href="https://www.linkedin.com/in/bholesanket/" target='_blank' rel='noreferrer'><FaLinkedin/></a></div>
            <div className="col"><a className='instagram' href="https://www.instagram.com/sanketbhole123/" target='_blank' rel='noreferrer'><FaInstagram/></a></div>
            <div className="col"><a className='facebook' href="https://www.facebook.com/sanket.bhole.791" target='_blank' rel='noreferrer'><FaFacebookSquare/></a></div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
