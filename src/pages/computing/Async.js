import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";
export default function Async() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="Async JS and HTTP Requests" Afile="12___Async_JavaScript_and_HTTP_Requests.pdf"/>}
    {!loggedIn && <Comp title="Async JS and HTTP Requests" Afile="upgradeForFullAccess.pdf"/>}
  </>
  )
}
