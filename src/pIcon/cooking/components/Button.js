import React from 'react'
import './Button.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons'
export const Button = ({setModal}) => {
  return (
    <>
    <button className='pdfButton'
    onClick={()=>setModal(true)}><FontAwesomeIcon className="pdfIcon" icon={faFileLines } /></button>

  

    </>
  )
}
