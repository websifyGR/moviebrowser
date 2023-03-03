import React from 'react';
import Hero from "./Hero";
import imageNoimage from "../assets/images/image_no_image.jpg";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactJson from 'react-json-view';

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=el-GR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
        
        //console.log('Poster path: '+data.poster_path)
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Άντληση δεδομένων..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;  
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                {
                  movieDetails.poster_path &&
                  <>
                  <img src={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded" />
                  
                  </>
                }
                {
                  !movieDetails.poster_path &&   
                  <>
                  <img src={imageNoimage} alt={movieDetails.original_title} className="img-fluid shadow rounded" />
                  
                  </>  
                }
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                
                <h2><u>RESThook router API JSON response</u></h2>
                
                <p className="lead"><b>Δείτε παρακάτω αναλυτικά όλο τον πίνακα της απάντησης του API server :</b></p>
                <p><ReactJson src={movieDetails} theme="summerfruit:inverted" iconStyle="square" onEdit="true" onAdd="true" onDelete="true" /></p>
                <p><img src={WebsifyLogo} className="websify-logo-under-movie-image" alt="Websify Logo" /></p>
              </div>
            </div>
 
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
