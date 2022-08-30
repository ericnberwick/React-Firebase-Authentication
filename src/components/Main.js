import React from "react"
import RNavbar from "./RNavbar/RNavbar";
import FbNavbar from "../FbNavbar"
import "../css/Main.css";
import Cards from "../components/Cards"
export default function Main() {

  return (
    <>
      <RNavbar/>
      <Cards section={'notEd'}/>
    </>
  )
}