import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function CSS2() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Improved Styling CSS" Afile="4___Improved_Styling_CSS.pdf"/>}
    {!loggedIn && <Comp title="Improved Styling CSS" Afile="upgradeForFullAccess.pdf"/>}
  </>
  )
}
