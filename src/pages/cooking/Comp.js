import FbNavbar from "../../FbNavbar"
import CookApp from "../../pIcon/cooking/CookApp"
import "./Comp.css"
export default function Comp({title, Afile}) {
    
  return (
  <>
    <div className="page">
    <FbNavbar />
    <h1 className="title">{title}</h1>
    <CookApp className="thepdf" file={Afile} />
    </div>
  </>
  )
}
