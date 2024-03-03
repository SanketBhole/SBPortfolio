import {React, useState} from 'react'
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Contact/Contact.css'
import{FaInstagram,FaLinkedin,FaGithub,FaFacebookSquare} from 'react-icons/fa'
import {IoMdPaperPlane} from 'react-icons/io'
import locationlogo from '../../images/locationicon.png'
import gmaillogo from '../../images/gmailicon.png'
import phonelogo from '../../images/phoneicon.png'
import connectlogo from '../../images/connect.png'

//Firebase Imports
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

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

export default function Contact() {

  let navigate = useNavigate();

  // Initialize Firebase
  // const app = initializeApp({
  //   apiKey: "AIzaSyA3FPut_uN6OclPrSFU0OraEhnWFfDMUaM",
  // authDomain: "sportfoliob.firebaseapp.com",
  // projectId: "sportfoliob",
  // storageBucket: "sportfoliob.appspot.com",
  // messagingSenderId: "369047986987",
  // appId: "1:369047986987:web:fb1a18f6e9a621bb95db6e",
  // measurementId: "G-J626JNE2X7"
  // });
  // const analytics = getAnalytics(app);
  // const db = getFirestore(app);

  const [contact, setContact] = useState({
    name:"",
    mobile:"",
    cname:"",
    cemail:"",
    message:"",
  });

  const { name, mobile, cname, cemail, message } = contact;

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:8081/contact/add", contact);
    await axios.post("https://sbportfolio-contact.onrender.com/contact/add", contact);
    alert("Message Send Successfully");
    navigate("/");
  };

  // //Firebase Submit Function
  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Add data to the 'contacts' collection in Firestore
  //     const docRef = await addDoc(collection(db, "contacts"), {
  //       name: name,
  //       mobile: mobile,
  //       cname: cname,
  //       cemail: cemail,
  //       message: message,
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //     alert("Message Sent Successfully");
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     alert("Error sending message. Please try again later.");
  //   }
  // };

  return (
    <motion.div  className='text-light' id="contact_detail" initial="out" animate="in" exit="out" variants={pageVariants}>
      <div class="container" >
        <div class="row  maindiv p-1" >
          <div class="col-sm-6 p-3">
            <div className="container firstsection p-3 " >              
              <h1 className='text-center'>Points To Contact</h1>
              
              <h3><img src={phonelogo}alt="mobile"/> Let's Talk</h3>
              <h4>+91-78987 92951</h4>

              <h3><img src={gmaillogo} alt="gmail"/> General Support</h3>
              <h4> er.sanketbhole@gmail.com</h4>
            
              <h3><img src={locationlogo} alt="location"/> Address</h3>
              <h4>A/E-416, Housing Board Colony,<br/> Pithampur, MadhyaPradesh, 454775</h4> 
            
              <h3><img src={connectlogo} alt="location"/> Stay Connected</h3>
              <div className="container iconset" >
                <a className='git' href="https://github.com/SanketBhole" target='_blank' rel='noreferrer'><FaGithub/></a>
                <a className='linkedin' href="https://www.linkedin.com/in/bholesanket/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
                <a className='instagram' href="https://www.instagram.com/sanketbhole123/" target='_blank' rel='noreferrer'><FaInstagram/></a>
                <a className='facebook' href="https://www.facebook.com/sanket.bhole.791" target='_blank' rel='noreferrer'><FaFacebookSquare/></a>
              </div>
              </div>
          </div>
          <div class="col-sm-6 formsection text-center p-3" >
            <h1>Let's Build<br/>Something Great Together</h1>
            <form class="px-4" onSubmit={(e) => onSubmit(e)}>
                  <div class="form-group my-3">
                    <input type={"text"} class="form-control" name ="name" id="name" placeholder="Name"  value={name} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div class="form-group my-3">
                    <input type={"number"} class="form-control" name ="mobile" id="mobile" placeholder="Mobile"  value={mobile} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div class="form-group my-3">
                    <input type={"text"} class="form-control" name ="cname" id="cname" placeholder="Company Name"  value={cname} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div class="form-group my-3">
                    <input type={"email"} class="form-control" name ="cemail" id="cemail" placeholder="Company Email"  value={cemail} onChange={(e) => onInputChange(e)} required/>
                </div>
                <div class="form-group my-3">
                  <textarea type={"text"} class="form-control" rows="2" name ="message" id="message" placeholder="Message"  value={message} onChange={(e) => onInputChange(e)} required></textarea>
                </div>
                <div class="form-group my-4 text-center" id="submit">
                  <h4><button type="submit" class=" px-4 py-1 rounded"><IoMdPaperPlane/> SEND</button></h4>
                </div>
              </form>	
            </div>
        </div>
      </div>
    </motion.div>
  )
}
