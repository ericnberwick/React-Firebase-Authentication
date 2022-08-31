
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js"
import "./logsign.css"
import FbNavbar from "../FbNavbar";
import RNavbar from "./RNavbar/RNavbar";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
    async function handleSubmit(e) {
        e.preventDefault()
    

        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          navigate('/');
        } catch {
          setError("Failed to Log In")
        }
    
        setLoading(false)
      }

  return (
    <>
    
    <RNavbar />
    <div className="logcard">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {useAuth.currentUser && <h1>You are signed in: {useAuth.currentUser.emailRef}</h1>}
          {!useAuth.currentUser && <h1>You are not signed in</h1>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/checkout">Create Account Here</Link> {/* This is where we redirect to payment */}
      </div>
      </div>
    </>
  )
}
