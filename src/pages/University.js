import Footer from "../components/Footer"
import FbNavbar from "../FbNavbar"
import UniversityCards from "../components/cards/UniversityCards"
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
export default function University() {
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
    <UniversityCards section={"University"} />
    </motion.div>
    </div>
    
    
    </>
    )
}
