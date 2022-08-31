import FbNavbar from "../../FbNavbar"
import CookApp from "../../pIcon/cooking/CookApp"
import "./Comp.css"
import RNavbar from "../../components/RNavbar/RNavbar"
export default function Comp({title, Afile}) {
    
  return (
  <>
    <div className="page">
    <RNavbar />
    <h1 className="title">{title}</h1>
    <CookApp className="thepdf" file={Afile} />
    </div>
  </>
  )
}
