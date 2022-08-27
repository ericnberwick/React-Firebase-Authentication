import React from "react"
import Signup from "./SignUp"
import {Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile";
import Main from "./Main";
import Navbar from "./Navbar"
import Pricing from "../pages/Pricing"
import Home from "../pages/Home"

import "@fontsource/league-spartan"; //npm install @fontsource/league-spartan
import Books from "../pages/Books";
import Computing from "../pages/Computing";
import Cooking from "../pages/Cooking";
import Photography from "../pages/Photography";
import Trading from "../pages/Trading";
import University from "../pages/University";
import Landing from "./Landing";
import HTML1 from "../pages/computing/HTML1"
import CSS1 from "../pages/computing/CSS1"
import CSS2 from "../pages/computing/CSS2"
import Git from "../pages/computing/Git"
import JS1 from "../pages/computing/JS1"
import JS2 from "../pages/computing/JS2"
import JSTesting from "../pages/computing/JSTesting"
import ReactPage from "../pages/computing/ReactPage"
import Response from "../pages/computing/Response"
import WebDes from "../pages/computing/WebDes"
import Async from "../pages/computing/Async"
import Cook1 from "../pages/cooking/cook1"
import Cook2 from "../pages/cooking/cook2"
import Cook3 from "../pages/cooking/cook3"
import Cook4 from "../pages/cooking/cook4"
import Cook5 from "../pages/cooking/cook5"
import Cook6 from "../pages/cooking/cook6"
import Cook7 from "../pages/cooking/cook7"
import Cook8 from "../pages/cooking/cook8"
import Cook9 from "../pages/cooking/cook9"
import Cook10 from "../pages/cooking/cook10"
import Cook11 from "../pages/cooking/cook11"
import Cook12 from "../pages/cooking/cook12"
function App() {
  
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" element={<Landing/>} />
              <Route exact path="/home" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route exact path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
              <Route path="/cook1" element={<Cook1/>} />
              <Route path="/cook2" element={<Cook2/>} />
              <Route path="/cook3" element={<Cook3/>} />
              <Route path="/cook4" element={<Cook4/>} />
              <Route path="/cook5" element={<Cook5/>} />
              <Route path="/cook6" element={<Cook6/>} />
              <Route path="/cook7" element={<Cook7/>} />
              <Route path="/cook8" element={<Cook8/>} />
              <Route path="/cook9" element={<Cook9/>} />
              <Route path="/cook10" element={<Cook10/>} />
              <Route path="/cook11" element={<Cook11/>} />
              <Route path="/cook12" element={<Cook12/>} />
              <Route path="/html1" element={<HTML1/>} />
              <Route path="/css1" element={<CSS1/>} />
              <Route path="/css2" element={<CSS2/>} />
              <Route path="/git" element={<Git/>} />
              <Route path="/js1" element={<JS1/>} />
              <Route path="/js2" element={<JS2/>} />
              <Route path="/jstesting" element={<JSTesting/>} />
              <Route path="/react" element={<ReactPage/>} />
              <Route path="/response" element={<Response/>} />
              <Route path="/webdes" element={<WebDes/>} />
              <Route path="/async" element={<Async/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/books" element={<Books/>} />
              <Route path="/computing" element={<Computing/>} />
              <Route path="/cooking" element={<Cooking/>} />
              <Route path="/photography" element={<Photography/>} />
              <Route path="/trading" element={<Trading/>} />
              <Route path="/university" element={<University/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
