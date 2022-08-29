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
import "@stripe/stripe-js" //include this in your root (App.js)
import Checkout from "../components/Checkout";
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
import Book1 from "../pages/books/book1"
import Book2 from "../pages/books/book2"
import Book3 from "../pages/books/book3"
import Book4 from "../pages/books/book4"
import Book5 from "../pages/books/book5"
import Book6 from "../pages/books/book6"
import Book7 from "../pages/books/book7"
import Book8 from "../pages/books/book8"
import Book9 from "../pages/books/book9"
import Book10 from "../pages/books/book10"
import Book11 from "../pages/books/book11"
import Book12 from "../pages/books/book12"
import Uni1 from "../pages/university/uni1"
import Uni2 from "../pages/university/uni2"
import Uni3 from "../pages/university/uni3"
import Uni4 from "../pages/university/uni4"
import Uni5 from "../pages/university/uni5"
import Uni6 from "../pages/university/uni6"
import Uni7 from "../pages/university/uni7"
import Uni8 from "../pages/university/uni8"
import Uni9 from "../pages/university/uni9"
import Uni10 from "../pages/university/uni10"
import Uni11 from "../pages/university/uni11"
import Photo1 from "../pages/photo/photo1"
import Photo2 from "../pages/photo/photo2"
import Photo3 from "../pages/photo/photo3"
import Photo4 from "../pages/photo/photo4"
import Photo5 from "../pages/photo/photo5"
import Photo6 from "../pages/photo/photo6"
import Trade1 from "../pages/trading/trade1"
import Trade2 from "../pages/trading/trade2"
import Trade3 from "../pages/trading/trade3"

function App() {
  
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router basename="/React-Firebase-Authentication/">
          <AuthProvider>
            <Switch>
              <Route path="/" element={<Landing/>} />
              <Route exact path="/home" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route exact path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/trade1" element={<Trade1/>} />
              <Route path="/trade2" element={<Trade2/>} />
              <Route path="/trade3" element={<Trade3/>} />
              <Route path="/photo1" element={<Photo1/>} />
              <Route path="/photo2" element={<Photo2/>} />
              <Route path="/photo3" element={<Photo3/>} />
              <Route path="/photo4" element={<Photo4/>} />
              <Route path="/photo5" element={<Photo5/>} />
              <Route path="/photo6" element={<Photo6/>} />
              <Route path="/uni1" element={<Uni1/>} />
              <Route path="/uni2" element={<Uni2/>} />
              <Route path="/uni3" element={<Uni3/>} />
              <Route path="/uni4" element={<Uni4/>} />
              <Route path="/uni5" element={<Uni5/>} />
              <Route path="/uni6" element={<Uni6/>} />
              <Route path="/uni7" element={<Uni7/>} />
              <Route path="/uni8" element={<Uni8/>} />
              <Route path="/uni9" element={<Uni9/>} />
              <Route path="/uni10" element={<Uni10/>} />
              <Route path="/uni11" element={<Uni11/>} />
              <Route path="/book1" element={<Book1/>} />
              <Route path="/book2" element={<Book2/>} />
              <Route path="/book3" element={<Book3/>} />
              <Route path="/book4" element={<Book4/>} />
              <Route path="/book5" element={<Book5/>} />
              <Route path="/book6" element={<Book6/>} />
              <Route path="/book7" element={<Book7/>} />
              <Route path="/book8" element={<Book8/>} />
              <Route path="/book9" element={<Book9/>} />
              <Route path="/book10" element={<Book10/>} />
              <Route path="/book11" element={<Book11/>} />
              <Route path="/book12" element={<Book12/>} />
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
