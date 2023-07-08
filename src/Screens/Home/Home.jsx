import { React, useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import './Home.css';
import Logo from '../../Components/Common/Logo';

export default function Home() {

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

  const textVariants = {
    initial: { x: -100 },
    animate: { x: 0, transition: { type: "spring", damping: 5, stiffness: 100 } },
    exit: { x: 100 }
  };


  const initialText = "                                 ";
  const finalText = "Full Stack Developer.";

  const variants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };


  const [activeIndex, setActiveIndex] = useState(0);

  const texts = ["Python .", "React .", "AWS ."];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, texts.length]);


  return (
    // <motion.div className='top'>
    //   <Logo />
    //   <motion.img
    //     style={{ height: "600px", width: '480px', float: "right", marginRight: "25px", paddingTop: "50px" }}
    //     src='https://preview.colorlib.com/theme/schmidt/images/jschmidt.png'
    //     variants={imageVariants}
    //     initial="initial"
    //     animate="animate"
    //   />

    //   <motion.div className='title-text'>

    //     <motion.span
    //       variants={variants}
    //       initial="initial"
    //       animate="animate"
    //       style={{ color: '#3458eb', paddingLeft: "100px", fontSize: "1.5rem" }}
          
    //     >
    //       {initialText.split("").map((letter, index) => (
    //         <motion.span
    //           key={index}
    //           variants={letterVariants}
    //         >
    //           {finalText[index]}
    //         </motion.span>
    //       ))}
    //     </motion.span>

    //     <motion.h1 style={{ paddingLeft: "100px", fontSize: "4rem" }}
    //       variants={textVariants} initial="initial" animate="animate"
    //     >
    //       I'm Jack
    //       <motion.span
    //         whileHover={{ color: '#3458eb' }}
    //         style={{ paddingLeft: "10px" }}
    //       >
    //         Phillip

    //       </motion.span>
    //     </motion.h1>


    //     <motion.div
    //       style={{
    //         position: "relative",
    //         width: "100%",
    //         height: "50px",
    //         overflow: "hidden",
    //         paddingLeft: "100px"
    //       }}
    //     >
    //       <motion.h3 style={{paddingTop:"7px"}}>I know about</motion.h3>
    //       {texts.map((text, index) => (
    //         <motion.h3
    //           key={index}
    //           style={{
    //             position: "absolute",
    //             top: 0,
    //             height: "10%",
    //             textAlign: "left",
    //             lineHeight: "50px",
    //             opacity: activeIndex === index ? 1 : 0,
    //             fontWeight:"bold",
    //             paddingLeft:"10.3rem",
    //             color:"#3458eb"
    //           }}
    //           animate={{
    //             y: activeIndex === index ? 0 : "100%",
    //           }}
    //           transition={{ duration: 0.5 }}
    //         >
    //           {text}
    //         </motion.h3>
    //       ))}
    //     </motion.div>


    //     <motion.h5 style={{ paddingLeft: "100px", color: "#B9BBB6" }}>
    //       A passionate creator living in Mumbai, India. My work spans across multiple disciplines from product design, to web design, branding and art.
    //     </motion.h5>


    //   </motion.div>


    // </motion.div>
  
  
    <motion.div>
      <motion.div className='logo'>
      <Logo />
      </motion.div>
    
      <motion.img
        style={{ height: "580px", width: '450px', float: "left", marginRight: "25px", paddingTop: "10px" }}
        src='https://toluwalope.tech/assets/images/peep-8.svg'
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />

    <motion.div className='title-text'>
    <motion.h5 className='hello-text'>
        Hello i am
      </motion.h5>
      <motion.h1 className='name-text'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      >
        AFFAN SHAIKH
      </motion.h1>
      <motion.span>
      I deliver exceptional user experiences and bring innovative ideas to life, resulting in increased user engagement, customer satisfaction, and business success


      </motion.span>
    </motion.div>
      

    </motion.div>
    )
}
