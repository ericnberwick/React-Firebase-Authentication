import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book1() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Limitless" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71NApfLNYjL.jpg"/>}
    {!loggedIn && <Comp title="Limitless" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71NApfLNYjL.jpg"/>}
    
  </>
  )
}
