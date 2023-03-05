import React from 'react';
import Hero from "./Hero";
import imageNoimage from "../assets/images/image_no_image.jpg";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";
import { Link } from 'react-router-dom';
//import { Link }  from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (

     <div class="col">
  
      <div className="card h-100">
       
        {
          movie.poster_path && 
            <Link to={detailUrl}>   
              <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            </Link>
        }
       
        {
          !movie.poster_path &&
             <Link to={detailUrl}>  
               <img src={imageNoimage} className="card-img-top" alt={movie.original_title} />
             </Link>               
        }
        
        <div className="card-body">
          <Link to={detailUrl}><h5 className="card-title">{movie.original_title}</h5></Link>
        </div>
        <div className="card-footer">
          <p>{movie.overview.slice(0, 117)}...</p>

         { 
           movie.release_date &&
           <button type="button" class="btn btn-danger">{movie.release_date.slice(0, 4)}</button> 
         }
         { 
           !movie.release_date &&
           <button type="button" class="btn btn-danger">????</button> 
         }         
          
          &nbsp;&nbsp;&nbsp;
          <Link to={detailUrl} className="btn btn-sm btn-outline-dark">δείτε λεπτομέρειες</Link>
              
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
