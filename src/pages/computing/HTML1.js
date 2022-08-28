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
    {loggedIn && <Comp title="HTML For Beginnerss" Afile="1___HTML_Fundamentals.pdf"/>}
    {!loggedIn && <Comp title="HTML For Beginnerss" Afile="u.pdf"/>}
  </>
  )
}
