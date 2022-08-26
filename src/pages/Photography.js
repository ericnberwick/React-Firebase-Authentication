import FbNavbar from "../FbNavbar"
import { motion } from 'framer-motion';
import "../css/pages.css"
import PhotographyCards from "../components/cards/PhotographyCards"
import Footer from "../components/Footer"
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
export default function Photography() {
  return (
    <>
    <FbNavbar />
    <div className="cardContainer">
  <motion.div className="baseContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
    <PhotographyCards section={"Photography"}/>
    </motion.div>
    </div>
    
    
    </>
    )
}
