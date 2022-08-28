import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Git() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Git" Afile="Git_Notes.pdf"/>}
    {!loggedIn && <Comp title="Git" Afile="u.pdf"/>}
    
  </>
  )
}
