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
    {loggedIn && <Comp title="React" Afile="13___React.pdf"/>}
    {!loggedIn && <Comp title="React" Afile="u.pdf"/>}
  </>
  )
}
