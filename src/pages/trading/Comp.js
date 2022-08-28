import FbNavbar from "../../FbNavbar"
import BookApp from "../../pIcon/books/BookApp"
import "./Comp.css"
export default function Comp({title, Afile, cover}) {
    
  return (
  <>
    <div className="page">
    <FbNavbar />
    <h1 className="title">{title}</h1>
    <BookApp className="thepdf" file={Afile} bcover={cover} />
    </div>
  </>
  )
}
