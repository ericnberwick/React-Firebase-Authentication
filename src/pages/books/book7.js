import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book7() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="How To Win Friends and Influence People" Afile="Limitless___Jim_Kwik.pdf" cover="https://m.media-amazon.com/images/I/41FYFMn7lZL._AC_SY780_.jpg"/>}
    {!loggedIn && <Comp title="How To Win Friends and Influence People" Afile="upgradeForFullAccess.pdf" cover="https://m.media-amazon.com/images/I/41FYFMn7lZL._AC_SY780_.jpg"/>}
  </>
  )
}
