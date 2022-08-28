import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Book5() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Atomic Habits" Afile="Limitless___Jim_Kwik.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"/>}
    {!loggedIn && <Comp title="Atomic Habits" Afile="upgradeForFullAccess.pdf" cover="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"/>}
  </>
  )
}
