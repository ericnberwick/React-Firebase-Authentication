import Footer from "../components/Footer"
import { motion } from 'framer-motion';
import RNavbar from "../components/RNavbar/RNavbar";
import "../css/pages.css"
import FbNavbar from "../FbNavbar"
import CookingCards from "../components/cards/CookingCards"
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
export default function Cooking() {
  return (
    <>
    <RNavbar />
    <div className="cardContainer">
    <motion.div className="home container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.2 }}
          >
    <CookingCards section={"Cooking"}/>
    </motion.div>
    </div>
    
    
    </>
    )
}
