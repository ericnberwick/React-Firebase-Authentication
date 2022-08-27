import FbNavbar from "../../FbNavbar"
import CompApp from "../../pIcon/computing/CompApp"
import "./Comp.css"
export default function Comp({title, Afile}) {
    
  return (
  <>
    <div className="page">
    <FbNavbar />
    <h1 className="title">{title}</h1>
    <CompApp className="thepdf" file={Afile} />
    </div>
  </>
  )
}
