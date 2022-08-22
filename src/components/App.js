import React from "react"
import Signup from "./SignUp"
import {Container} from "react-bootstrap";
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
import HTML1 from "../pages/computing/HTML1"
import "@fontsource/league-spartan"; //npm install @fontsource/league-spartan
import Books from "../pages/Books";
import Computing from "../pages/Computing";
import Cooking from "../pages/Cooking";
import Photography from "../pages/Photography";
import Trading from "../pages/Trading";
import University from "../pages/University";


function App() {
  
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" element={<Main/>} />
              <Route exact path="/home" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route exact path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/html1" element={<HTML1/>} />
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
