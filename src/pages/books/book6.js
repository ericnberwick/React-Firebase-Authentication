import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book6() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="The Infinite Game" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51YNDYmRqBL.jpg"/>}
    {!loggedIn && <Comp title="The Infinite Game" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51YNDYmRqBL.jpg"/>}
  </>
  )
}
