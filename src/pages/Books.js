import Footer from "../components/Footer"
import FbNavbar from "../FbNavbar"
import BookCards from "../components/cards/BookCards"
import { motion } from 'framer-motion';
import "../css/pages.css"

import PlantBackground from "../pics/back1.png";
const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '80vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.3 }
  },
  exit: {
    x: "-80vh",
    transition: { ease: 'easeInOut' }
  }
};
export default function Books() {

  return (
  <>
  <FbNavbar />
  <div className="cardContainer">
  <motion.div className="home container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.2 }}
          >
  <BookCards section={"Books"}/>
          </motion.div>
  </div>
  </>
  )
}
