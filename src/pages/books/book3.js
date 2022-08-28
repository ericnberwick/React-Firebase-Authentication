import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book3() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Think and Grow Rich" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71ZA+vKnFRL.jpg"/>}
    {!loggedIn && <Comp title="Think and Grow Rich" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71ZA+vKnFRL.jpg"/>}
  </>
  )
}
