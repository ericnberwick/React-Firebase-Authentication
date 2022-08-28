import Comp from "./Comp"
import { useAuth } from "../../contexts/AuthContext.js";

export default function Cook3() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
  <>
    {loggedIn && <Comp title="The Famous Chicken Pasta" Afile="2___CSS_Fundamentals.pdf"/>}
    {!loggedIn && <Comp title="The Famous Chicken Pasta" Afile="u.pdf"/>}
  </>
  )
}
