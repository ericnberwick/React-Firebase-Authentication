import React from 'react'
import './Button.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons'
export const Button = ({setModal, cover}) => {
  return (
    <>
    <button className='pdfButton'
    onClick={()=>setModal(true)}><img src={cover} alt="Logo"  width="100" height="100"/></button>

  

    </>
  )
}
