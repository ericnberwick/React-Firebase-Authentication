import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book12() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Rich Dad Poor Dad" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"/>}
    {!loggedIn && <Comp title="Rich Dad Poor Dad" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"/>}
  </>
  )
}
