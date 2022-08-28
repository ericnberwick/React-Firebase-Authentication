import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function HTML1() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="JavaScript for Beginners" Afile="7___JavaScript.pdf"/>}
    {!loggedIn && <Comp title="JavaScript for Beginners" Afile="u.pdf"/>}
  </>
  )
}
