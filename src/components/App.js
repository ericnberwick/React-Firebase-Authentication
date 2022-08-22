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
import About from "../pages/About"
import "@fontsource/league-spartan"; //npm install @fontsource/league-spartan



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
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
