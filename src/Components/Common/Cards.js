import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  

  return (
    <>
    <motion.div whileHover={{scale: 1.1,backgroundColor : "#ffffff"}} 
    transition={{ scale: { type: 'spring', stiffness: 500 } }} 
    style={{width: '23rem', height: "28rem", border: '1px solid #B9BBB6', borderRadius: '5px' }} 
    onClick={props.click}
    >

      <motion.img whileHover={{scale:0.9}} variant="top" height={280} width={365} style={{borderRadius:'5px'}} src={props.images}/>
      <motion.div>
        <motion.h3>Card Title</motion.h3>
        <motion.p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </motion.p>
      </motion.div>
    </motion.div>
    </>
  );
}

export default Cards;