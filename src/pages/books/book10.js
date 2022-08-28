import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book10() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Build a Bulletproof Body For Extreme Adventure In 365 Days" Afile="Limitless___Jim_Kwik.pdf" cover="https://cdn.waterstones.com/bookjackets/large/9780/0084/9780008487034.jpg"/>}
    {!loggedIn && <Comp title="Build a Bulletproof Body For Extreme Adventure In 365 Days" Afile="upgradeForFullAccess.pdf" cover="https://cdn.waterstones.com/bookjackets/large/9780/0084/9780008487034.jpg"/>}
  </>
  )
}
