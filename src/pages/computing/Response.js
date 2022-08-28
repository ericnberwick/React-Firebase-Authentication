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
    {loggedIn && <Comp title="Making a Website Responsive" Afile="6___Making_a_Website_Responsive.pdf"/>}
    {!loggedIn && <Comp title="Making a Website Responsive" Afile="u.pdf"/>}
  </>
  )
}
