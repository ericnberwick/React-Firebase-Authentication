import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Comingsoon() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    <Comp title="Coming Soon" Afile="comingsoon.pdf"/>
    
  </>
  )
}
