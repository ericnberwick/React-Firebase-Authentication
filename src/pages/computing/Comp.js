import FbNavbar from "../../FbNavbar"
import CompApp from "../../pIcon/computing/CompApp"
import "./Comp.css"
import RNavbar from "../../components/RNavbar/RNavbar"
export default function Comp({title, Afile}) {
    
  return (
  <>
    <div className="page">
    <RNavbar />
    <h1 className="title">{title}</h1>
    <CompApp className="thepdf" file={Afile} />
    </div>
  </>
  )
}
