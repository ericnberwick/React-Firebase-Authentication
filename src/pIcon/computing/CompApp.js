import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import {getDownloadURL, ref} from 'firebase/storage'
import storage from './config/firebase'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons'
function CompApp ({file}) {
  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage, file)).then((url)=>{
      setResume(url);
    }).catch(console.log("first"))
  },[])

  return (
    <>
    <div className="container">
      

      <Button class="pdfButton" setModal={setModal}/>
      {modal===true&&(
        <Modal setModal={setModal} resume={resume}/>
      )}

    </div>

    </>
  )
}
export default CompApp;

