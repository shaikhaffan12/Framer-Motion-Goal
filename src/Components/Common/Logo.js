import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import './Common.css';

const Logo = () => {
    const navigate = useNavigate()
  return (
    // <motion.div
    //   className="logo"
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{ duration: 1 }}
    //   style = {{width: "75px",  top:32, position:"relative", left:100, height: "65px", borderRadius: "50%"}}
    // >
    //   <motion.div
    //     className="logo-circle"
    //     initial={{ opacity: 0, scale: 0 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 1, delay: 0.2 }}
    //   />
    //   <motion.div
    //     className="logo-line"
    //     initial={{ opacity: 0, x: -50 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     transition={{ duration: 0.8, delay: 0.5 }}
    //   />
    //   <motion.div
    //     className="logo-text"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8, delay: 0.7 }}
    //   >
    //     <motion.img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
    //     style={{top:11, position: "relative", left:16, cursor:"pointer"}}
    //     onClick={()=> navigate("/")}
    //     animate={{ rotate: 360 }} // Final rotation angle (360 degrees)
    //     transition={{ duration: 1.5, repeat: Infinity }} // Animation duration and looping
    //     />
    //   </motion.div>
    // </motion.div>

    <motion.div className="logo" onClick={()=> navigate("/")} style={{cursor: "pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-rocket" viewBox="0 0 16 16">
      <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"/>
      <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z"/>
      <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z"/>
    </svg>
    <motion.span style={{fontSize:"1.3rem"}}>
      AFFAN SHAIKH
    </motion.span>
    </motion.div>
  );
};

export default Logo;