import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book9() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="The World's Fittest Book" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71JtF90V+DL.jpg"/>}
    {!loggedIn && <Comp title="The World's Fittest Book" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71JtF90V+DL.jpg"/>}
  </>
  )
}
