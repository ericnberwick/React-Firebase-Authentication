import FbNavbar from "../../FbNavbar"
import BookApp from "../../pIcon/books/BookApp"
import "./Comp.css"
import RNavbar from "../../components/RNavbar/RNavbar"
export default function Comp({title, Afile, cover}) {
    
  return (
  <>
    <div className="page">
    <RNavbar />
    <h1 className="title">{title}</h1>
    <BookApp className="thepdf" file={Afile} bcover={cover} />
    </div>
  </>
  )
}
