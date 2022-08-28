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
    {loggedIn && <Comp title="Fundamentals Of Web Design" Afile="5___Fundamentals_of_Web_Design.pdf"/>}
    {!loggedIn && <Comp title="Fundamentals Of Web Design" Afile="upgradeForFullAccess.pdf"/>}
  </>
  )
}
