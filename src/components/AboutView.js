import React from 'react';
import Hero from "./Hero";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";

const AboutView = () => {
  return (
    <>
      <Hero text="Σχετικά με αυτό το έργο REACT.js" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <h2>Case study :</h2>
            <p className="lead">
               ΞΕΚΙΝΗΣΤΕ ΝΑ ΓΡΑΦΕΤΕ ΣΤΗΝ ΑΝΑΖΗΤΗΣΗ ΕΠΑΝΩ ΔΕΞΙΑ ΓΙΑ ΝΑ ΕΜΦΑΝΙΣΤΟΥΝ ΟΙ ΚΙΝΗΜΑΤΟΓΡΑΦΙΚΕΣ ΤΑΙΝΙΕΣ
            </p>            
            <p className="lead">
                Σε αυτή την περίπτωση εξετάζουμε το API TMDB : https://developers.themoviedb.org/3/movies/get-movie-details.
            </p>
            <ul className="lead">
                <li>Να εμφανίσουμε καρτέλες με τα βασικά στοιχεία κινηματογραφικών ταινιών σύμφωνα με την αναζήτηση του χρήστη</li>
                <li>Να εμφανίσουμε την περιγραφή</li>
            </ul>
            <p className="lead">
              <img src={WebsifyLogo} className="websify-logo-inpage" alt="Websify Logo" />
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
