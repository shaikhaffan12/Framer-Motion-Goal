import { React, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEdit, AiOutlineHome } from 'react-icons/ai';
import { TbPointer, TbSend } from 'react-icons/tb';
import { BsPerson, BsInstagram } from 'react-icons/bs';
import { RxLayers, RxDividerVertical } from 'react-icons/rx';
import { FiTwitter } from 'react-icons/fi';
import './Navbar.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  // const [clicked, setClicked] = useState();

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
          overlay={<Tooltip>Stack</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("stack")}
          >
            <IconContext.Provider
              value={{ color: '#000', size: '22px' }}
            >
              <RxLayers />
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
          overlay={<Tooltip>Twitter</Tooltip>}
        >
          <motion.div className='icons'
            whileHover={{ backgroundColor: "#B9BBB6", borderRadius: "50%", scale: "1.1" }}
            transition={{ duration: 0.5 }}
          >
            <IconContext.Provider
              value={{ color: '#03a4ec', size: '22px' }}
            >
              <FiTwitter />
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
              <BsInstagram />
            </IconContext.Provider>

          </motion.div>
        </OverlayTrigger>
      </motion.div>

    </motion.div>
  )
}
