import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function JSTesting() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="JavaScript Testing" Afile="11___JavaScript_Testing.pdf"/>}
    {!loggedIn && <Comp title="JavaScript Testing" Afile="u.pdf"/>}
  </>
  )
}
