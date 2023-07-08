import React from 'react'
import Logo from '../../Components/Common/Logo'
import { motion } from 'framer-motion';
// import {PiCursorClickFill, GrCode, PiDotsSixBold, HiPuzzlePiece} from 'react-icons/all'
import {HiCursorClick} from 'react-icons/hi';
import {GrCode} from 'react-icons/gr';
import {CgWebsite} from 'react-icons/cg';
import {BsFillPuzzleFill, BsFillBuildingFill, BsPeopleFill} from 'react-icons/bs';


import './Stack.css';

export default function Stack() {

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

  const data = [
    { id: 1, logo: <HiCursorClick size={32}/>, title: "Frontend Development", desc: "I bring ideas to life in the browser, coding from scratch." },
    { id: 2, logo: <GrCode size={32}/>, title: "Backend Development", desc: "Building powerful server-side systems, coding from scratch." },
    { id: 3, logo: <CgWebsite size={32}/>, title: "Web Applications", desc: "Creating dynamic and intuitive web experiences." },
    { id: 4, logo: <BsFillPuzzleFill size={32}/>, title: "API Development", desc: "Crafting robust APIs, turning ideas into functional solutions." },
  ];

  const data2 = [
    { id: 1, logo: <BsPeopleFill size={32}/>, count: "2", desc: "Satisfied Customers" },
    { id: 2, logo: <CgWebsite size={32}/>, count: "8", desc: "Completed Projects" },
    { id: 3, logo: <HiCursorClick size={32}/>, count: "10", desc: "Web Pages" },
    { id: 4, logo: <BsFillBuildingFill size={32}/>, count: "1", desc: "Companies" },
  ];
  return (
    <div>
      <Logo />
      <motion.p style={{ fontSize: "2rem", textAlign: "center" }}>SKILLS</motion.p>

      <div className='main-container1'>
      <motion.div className='right'>
      <motion.img
        style={{ height: "500px", width: '480px', float: "right", marginRight: "10px", paddingTop: "25px" }}
        src='https://toluwalope.tech/assets/Bust/peep-25.svg'
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
      </motion.div>
      
      <div className='left'>
      <div className='container'>
      {data.map((item) => (

      //  need animation 
         <motion.div className='boxes'> 

          <motion.div>
            {item.logo}
          </motion.div>

          <motion.div className='texts1'>
            {item.title}
          </motion.div>

          <motion.div className='texts2'>
            {item.desc}
          </motion.div>

         </motion.div>
        
        ))}
      
      </div>
      </div>
      </div>

      <motion.div className='bottom-left'>
      <motion.img
        style={{ height: "600px", width: '480px', float: "left", marginRight: "10px", paddingTop: "10px", marginLeft: "40px" }}
        src='https://toluwalope.tech/assets/Bust/peep-67.svg'
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />
      </motion.div>

      <div className='bottom-right'>
      <div className='container'>
      {data2.map((item) => (

      //  need animation 
         <motion.div className='boxes1'> 

          <motion.div>
            {item.logo}
          </motion.div>

          <motion.div className='texts3'>
            {item.count}
          </motion.div>

          <motion.div className='texts4'>
            {item.desc}
          </motion.div>

         </motion.div>
        
        ))}
      
      </div>
      </div>
      
      </div>
  )
}
