import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function CSS1() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>

    {loggedIn &&<Comp title="CSS For Beginners" Afile="2___CSS_Fundamentals.pdf"/>}
    {!loggedIn &&<Comp title="CSS For Beginners" Afile="upgradeForFullAccess.pdf"/>}
  </>
  )
}
