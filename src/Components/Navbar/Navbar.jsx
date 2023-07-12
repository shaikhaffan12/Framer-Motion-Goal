import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEdit, AiOutlineHome } from 'react-icons/ai';
import { TbPointer, TbSend } from 'react-icons/tb';
import { BsPerson, BsInstagram, BsLightbulb, BsLinkedin } from 'react-icons/bs';
import {  RxDividerVertical } from 'react-icons/rx';
import './Navbar.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const handleLogoClick = (type) => {
    let url;
    if (type === 'instagram') {
      url = 'https://www.instagram.com/shaikhaffan._/';
    } else if (type === 'linkedin') {
      url = 'https://www.linkedin.com/in/affan-shaikh-197b311ba/';
    }

    if (url) {
      window.open(url, '_blank');
    }
  };

  const navBarVariants = {
    initial: { y: 100 },
    animate: { y: 0, transition: { type: "spring", damping: 10, stiffness: 100 } },
    exit: { y: 100 }
  };

  const navigate = useNavigate()

  return (
    <motion.div className='Main-Nav' whileHover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      variants={navBarVariants} initial="initial" animate="animate" exit="exit"
    >

      <motion.div className='inner-div'>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 300 }}
          overlay={<Tooltip>Home</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/")}
          >
            
            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
             <AiOutlineHome  /> 
            </IconContext.Provider>
            

          </motion.div>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Profile</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("products")}
          >

            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <BsPerson />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Projects</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("projects")}
          >

            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <TbPointer  />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Blog</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("blog")}
          >

            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <AiOutlineEdit />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Skills</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("stack")}
          >
            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <BsLightbulb />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Contact</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("contact")}
          >
            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <TbSend />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        <motion.div className='icons' 
          >
            <IconContext.Provider
              value={{ color: '#B9BBB6', size: '22px' }}
            >
              <RxDividerVertical />
            </IconContext.Provider>
            

          </motion.div>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Linkedin</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
          >
            <IconContext.Provider
              value={{ color: '#0077b0', size: '22px' }}
            >
              <BsLinkedin  onClick={()=>handleLogoClick("linkedin")}/>
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>Instagram</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
          >
            <IconContext.Provider
              value={{ color: '#ca2357', size: '22px' }}
            >
              <BsInstagram onClick={()=>handleLogoClick("instagram")}/>
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>
      </motion.div>

    </motion.div>
  )
}
