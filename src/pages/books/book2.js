import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book2() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="7 Habits of Highly Effective People" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL.jpg"/>}
    {!loggedIn && <Comp title="7 Habits of Highly Effective People" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL.jpg"/>}
  </>
  )
}
