import FbNavbar from "../../FbNavbar"
import CompApp from "../../pIcon/computing/CompApp"
import "./Comp.css"
export default function Comp({title, Afile}) {
    const styles = {
        border: '1px solid red', 
   };
  return (
  <>
    <div className="page">
    <FbNavbar />
    <h1 className="title">{title}</h1>
    <CompApp style={styles} className="thepdf" file={Afile} />
    </div>
  </>
  )
}
