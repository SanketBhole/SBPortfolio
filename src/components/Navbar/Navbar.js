import React from 'react'
import "../Navbar/Navbar.css"
import mySB from '../../images/favicon.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
    <nav className="navigation container">
        <div className="row">
            <ul className="menu">
                <li><Link className=' hvr-underline-from-center' to="/" >Home</Link></li>
                <li><Link className=' hvr-underline-from-center' to="/about" >About</Link></li>
                <li><Link to="/"><img className='logo' src={mySB} width={60} height={60} alt=""/></Link></li>
                <li><Link className=' hvr-underline-from-center' to="/portfolio" >Portfolio</Link></li>
                <li><Link className=' hvr-underline-from-center' to="/contact" >Contact</Link> </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
