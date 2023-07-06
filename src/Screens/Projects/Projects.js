import {React, useState} from 'react'
import { motion } from 'framer-motion';
import './Projects.css';
import Cards from '../../Components/Common/Cards';
import {AiOutlineClose} from 'react-icons/ai';
import { IconContext } from "react-icons";
import Logo from '../../Components/Common/Logo';
import {TbMathGreater} from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function Projects() {

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    console.log(isOpen)
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate()

  const images = [
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
  ]

  return (
    <div>
      <div style={{position: "relative", top:50, float: "right", right:80}}>

        <motion.span onClick={()=> navigate("/")}
        style={{cursor:"pointer"}}
        whileHover={{color:"#1890ff"}}
        >
          Home
        </motion.span>

        <TbMathGreater />

        <motion.span
        whileHover={{color:"red"}}
        >
          Project
        </motion.span>
      </div>
      <Logo />
      <motion.div className='projects-top'>
      

      {isOpen && (
          <motion.div
          className="popup"
          initial={{ x: "200vh" }}
          animate={{ x: 40 }}
          exit={{ x: "200vh" }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 30,
            height: "83%",
            width: "80rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: '1px solid #B9BBB6',
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
          }}
        >
          <IconContext.Provider
              value={{  size: '22px' }}
            >
              <AiOutlineClose onClick={handleClose} className='close-button'/>
            </IconContext.Provider>
          <motion.div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg' className='image-popup'/>
          </motion.div>
          {/* <h2>Pop-up Content</h2>
          <p>This is the content of the pop-up.</p> */}
          
          
        </motion.div>
        )}


        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { type: "spring", damping: 5, stiffness: 100 } }}
          exit={{ y: 100 }}
        >
          Projects
        </motion.h1>

        <motion.div className='main-motion'>
          <motion.div className='row-motion'>
            {images.map((value) => {
              return (
                <motion.div style={{paddingTop:"30px"}}>
                  <Cards images={value} click={handleButtonClick}/>
                </motion.div>
              )
            })}


          </motion.div>


        </motion.div>

        


      </motion.div>


    </div>
  )
}
