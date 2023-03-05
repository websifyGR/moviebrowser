//import React,{useState, useRef} from 'react';
import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";
//import { HOSTNAME } from '../environment';
//import useIntersection from "./useIntersection"
import { useCookies } from "react-cookie";


export default function ModalPopupView({link,titlos,movieid,linktype}) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true,console.log("show"));
    const handleShow = () => setShow(true);

    //const [cookies, setCookie] = useCookies(["modal"]);
    const [cookies] = useCookies(["modal"]);

    //console.log(linktype);

    function addModalCookie() {
        document.cookie = "modal=100; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
        console.log(cookies.modal);
        //alert(cookies.modal);
    }
    function removeModalCookie() {
        document.cookie = "modal=200; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
          console.log(cookies.modal);
          //alert(cookies.modal);
    }    
    

/*
    function handleClick(event) {   
        //console.log("handleClick(event) : " + event);
        console.log(event);    
      }
*/

    //const modalA = useRef(null);
    //console.log(modalA.current);

    //const url = new URL(link)
    //console.log(url)
    //console.log(window.location.href)
    //console.log(window.location.pathname.slice(0,7))
    //console.log(link.slice(0,7))
    //if (url.hostname === HOSTNAME ) /*return <a target="_blank" href={link}>{link}</a>*/

    //if (link.slice(0,7) === "movies/") {

    /* else */
    return (
      <>
        { linktype === "button" &&
        <button className="btn btn-sm btn-outline-dark" onClick={() => {handleShow();addModalCookie();}}>δείτε λεπτομέρειες</button>
        }
        <Modal size="xl" show={show} onHide={() => {handleClose();removeModalCookie();}}>
            <Modal.Title>&nbsp;&nbsp;&nbsp;<span id={movieid}>{titlos}</span></Modal.Title>
          <Modal.Body><iframe title={titlos} src={link} style={{width:'100%',height:'450px'}}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose();removeModalCookie();}}>
              Κλείσιμο
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  //  }
  }