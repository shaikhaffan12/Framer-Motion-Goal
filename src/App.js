import { motion } from "framer-motion";

import Home from "./Screens/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Projects from "./Screens/Projects/Projects";
import Products from "./Screens/Products/Products";
import Blog from "./Screens/Blog/Blog";
import Stack from "./Screens/Stack/Stack";
import Contact from "./Screens/Contact/Contact";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    
    <motion.div className="App"  >
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="products" element={<Products />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="stack" element={<Stack />}/>
        <Route path="contact" element={<Contact />}/>
        

      </Routes>
      
      
     
     
    </motion.div>
  );
}

export default App;
