import React from 'react'
import Logo from '../../Components/Common/Logo';
import { motion } from 'framer-motion';
import './Products.css';

export default function Products() {
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
    <motion.div>
      <Logo />

      <motion.img
        style={{ height: "500px", width: '480px', float: "left", marginRight: "25px", paddingTop: "10px", marginLeft:"70px" }}
        src='https://toluwalope.tech/assets/images/peep-46.svg'
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div className='box'>
        <motion.p style={{textAlign: "justify"}} className='paragraph'>
        I am a passionate and skilled Software Developer specializing in **Mobile and Web development** with a strong dedication to quality and **attention to detail**. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by **attending conferences**, **taking online courses**, and **experimenting with new technologies**. I build **functional, beautiful and user-friendly designs**. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.
        </motion.p>
        <motion.button>Qualifications</motion.button>
        <motion.button>Contact</motion.button>
      </motion.div>
      <p>Profile</p>
    
    </motion.div>
  )
}
