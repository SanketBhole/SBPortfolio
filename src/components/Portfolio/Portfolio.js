import React from 'react'
import { motion } from "framer-motion";
import portfolio from '../../images/portfolio.jpg';
import textutil from '../../images/textutils.jpg';
import icmmt from '../../images/icmmt.jpg';
import clicko from '../../images/clicko.jpg';
import '../Portfolio/Portfolio.css'
import {PiCodeBold} from 'react-icons/pi'
import {IoIosEye} from 'react-icons/io'


const pageVariants = {
  in: {
    opacity: 1,
    transition: "opacity 1000ms ease-in",
    y:0
  },
  out: {
    opacity: 0,
    transition: "opacity 1000ms ease-in",
    y:"100%"
  },
}
export default function Portfolio() {
  return (
    <motion.div className='text-light portimage ' initial="out" animate="in" exit="out" variants={pageVariants}>
      <div className="container text-center p-3" >
        <div className="row ">
          {/* First Project */}
          <div className="col-sm-6 p-2 ">
            <div className="row">
              <img src={portfolio} alt="" />
            </div>
            <h1 className='display-5' style={{fontWeight:'500'}}>React Portfolio</h1>
            <h3><a href="https://sportfoliob.web.app/" target="_blank" rel="noreferrer"><button><IoIosEye style={{fontSize:'2rem'}}/> Live Demo</button></a></h3>
            <h3><a href="https://github.com/SanketBhole/SBPortfolio" target="_blank" rel="noreferrer"><button><PiCodeBold style={{fontSize:'2rem'}} /> Source Code</button></a></h3>
          </div>
          {/* Second Project */}
          <div className="col-sm-6 p-2">
            <div className="row">
              <img src={textutil} alt="" />
            </div>
            <h1 className='display-5' style={{fontWeight:'500'}}>Text Utils</h1>
            <h3><a href="https://textutils-5cdd5.web.app/" target="_blank" rel="noreferrer"><button><IoIosEye style={{fontSize:'2rem'}}/> Live Demo</button></a></h3>
            <h3><a href="https://github.com/SanketBhole/TextUtils" target="_blank" rel="noreferrer"><button><PiCodeBold style={{fontSize:'2rem'}} /> Source Code</button></a></h3>
          </div>
        </div>
        <div className="row">
          {/* Third Project */}
          <div className="col-sm-6 p-2">
            <div className="row">
              <img src={icmmt} alt="" />
            </div>
            <h1 className='display-5' style={{fontWeight:'500'}}>ICMMT-2022</h1>
            <h3><a href="https://sdbc.ac.in/icmmt/" target="_blank" rel="noreferrer"><button><IoIosEye style={{fontSize:'2rem'}}/> Live Demo</button></a></h3>
            <h3><a href="https://github.com/SanketBhole/ICMMT-2022" target="_blank" rel="noreferrer"><button><PiCodeBold style={{fontSize:'2rem'}} /> Source Code</button></a></h3>
          </div>
          {/* Fourth Project */}
          <div className="col-sm-6 p-2">
            <div className="row">
              <img src={clicko} alt="" />
            </div>
            <h1 className='display-5' style={{fontWeight:'500'}}>Photographer's Portfolio</h1>
            <h3><a href="https://clickographby-pb.web.app/" target="_blank" rel="noreferrer"><button><IoIosEye style={{fontSize:'2rem'}}/> Live Demo</button></a></h3>
            <h3><a href="https://github.com/SanketBhole/PBCreations" target="_blank" rel="noreferrer"><button><PiCodeBold style={{fontSize:'2rem'}} /> Source Code</button></a></h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
