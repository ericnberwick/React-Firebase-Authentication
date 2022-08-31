import Footer from "../components/Footer"
import FbNavbar from "../FbNavbar"
import
import Cards from "../components/Cards"
import { motion } from 'framer-motion';
import "../css/pages.css"
const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};
export default function Computing() {
  return (
    <>
    <FbNavbar />
    <div className="cardContainer">
    <motion.div className="home container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.2 }}
          >
    <Cards section={"Computing"}/>
    </motion.div>
    </div>
    
    
    </>
    )
}
