import React from "react"
import Signup from "./SignUp"
import {Container} from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword"


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
            <Route exact path="/home" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
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
