import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book8() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Deep Work" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71g8BUSqbpL.jpg"/>}
    {!loggedIn && <Comp title="Deep Work" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/71g8BUSqbpL.jpg"/>}
  </>
  )
}
