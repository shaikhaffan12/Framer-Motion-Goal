import {React, useState} from 'react'
import Logo from '../../Components/Common/Logo';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {


  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleInputResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };


  const imageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <Logo />
      <motion.p style={{ fontSize: "2rem", textAlign: "center" }}>CONTACT</motion.p>

      <motion.div className='left'>
      <motion.img
        style={{ height: "500px", width: '480px', float: "left", marginRight: "10px", paddingTop: "25px" }}
        src='https://toluwalope.tech/assets/images/peep-43.svg'
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
      </motion.div>

      <motion.div className='right'>
        <p style={{marginTop:"3rem"}}>It's easy. Fill The Form</p>

        <div className='from'>

          <div className='for-labels'>
        <label>Full Name</label>
        </div>
        
        <div >
        <input 
        className='for-inputs'
        placeholder='Full Name'
        />
        </div>

        <div className='for-labels'>
        <label>Email</label>
        </div>
        
        <div >
        <input 
        className='for-inputs'
        placeholder='Email'
        />
        </div>

        <div className='for-labels'>
        <label>Message</label>
        </div>
        
        <div >
          <textarea
          className='for-inputs'
          value={message}
          onChange={handleInputChange}
          onInput={handleInputResize}
        />
        </div>

        <motion.button 
        className='button-first' whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#00000", border: "1px solid #000" }}>
          Submit
        </motion.button>
        </div>
      </motion.div>

    
    </div>
  )
}
