import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book4() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    { loggedIn && <Comp title="The Subltle Art of Not Giving a F***" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"/>}
    { loggedIn && <Comp title="The Subltle Art of Not Giving a F***" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"/>}
  </>
  )
}
