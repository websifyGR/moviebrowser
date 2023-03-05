import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import { Button } from 'react-bootstrap'
import Hero from "./Hero";
import imageNoimage from "../assets/images/image_no_image.jpg";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";
import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
//import { Link }  from 'react-router-dom';
import { useCookies } from "react-cookie";
//import ModalPopupView from './ModalPopupView';



function ModalPopupView({link,titlos,movieid,linktype}) {    
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

  //const url = new URL(window.location.href)
  //console.log(url.href)
  
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






const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `movie/${movie.id}`
  return (

     <div className="col">
  
      <div className="card h-100">
       
        {
          movie.poster_path && 
              
              <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            
        }
       
        {
          !movie.poster_path &&
             
               <img src={imageNoimage} className="card-img-top" alt={movie.original_title} />
                          
        }
        
        <div className="card-body">
          <Link to={detailUrl}>
            <h5 className="card-title">{movie.original_title}</h5>
            </Link>
        </div>
        <div className="card-footer">
          <p>{movie.overview.slice(0, 117)}...</p>

         { 
           movie.release_date &&
           <button type="button" className="btn btn-danger">{movie.release_date.slice(0, 4)}</button> 
         }
         { 
           !movie.release_date &&
           <button type="button" className="btn btn-danger">????</button> 
         }        
          
          &nbsp;&nbsp;&nbsp;
          
           
          <ModalPopupView linktype="button" link={detailUrl} titlos={movie.original_title} movieid={movie.id}/>
        </div>
      
      </div>
      
     </div>
     
  )
}


const SearchView = ({ keyword, searchResults }) => {
  const title = `Γίνεται αναζήτηση για : ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

   //console.log('results length: '+resultsHtml.length); 

  return (
    <>
      <Hero text={title} />


       {
         resultsHtml.length > 0 &&
          <div className="container">
            <div className="row">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
              {resultsHtml}
              </div> 
            </div>
          </div>
        }

        {
          resultsHtml.length === 0 &&
          <div className="d-flex align-items-top justify-content-center noResults">
          <div className="text-center">
              <h1 className="display-1 fw-bold">τίποτα...</h1>
              <p className="fs-3"> <span className="text-danger">Χμ...</span> Δε βρέθηκαν αποτελέσματα.</p>
              <p className="lead">
                  Παρακαλούμε προσπαθείστε να βελτιώσετε τους όρους αναζήτησης
              </p>
              <p className="lead">
              <img src={WebsifyLogo} className="websify-logo-under-movie-image" alt="logo" />
              </p>
          </div>
      </div>
        }


    </>
  );
};

export default SearchView;
