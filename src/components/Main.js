import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar";
import "../css/Main.css";

export default function Main() {

  return (
    <>
      
      <Navbar />
    </>
  )
}