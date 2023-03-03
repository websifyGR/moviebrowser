import React from 'react';
import Hero from "./Hero";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";

const Home = () => {
  return (
    <>
      <Hero text="WebsifY.gr RESThook Router" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
               ΞΕΚΙΝΗΣΤΕ ΝΑ ΓΡΑΦΕΤΕ ΣΤΗΝ ΑΝΑΖΗΤΗΣΗ ΕΠΑΝΩ ΔΕΞΙΑ ΓΙΑ ΝΑ ΕΜΦΑΝΙΣΤΟΥΝ ΟΙ ΚΙΝΗΜΑΤΟΓΡΑΦΙΚΕΣ ΤΑΙΝΙΕΣ
            </p>           
              <p className="lead">
                Πρόγραμμα περιήγησης κινηματογραφικών ταινιών βάσει API από ένα REACT.js Bootcamp. Υπάρχει λειτουργία άμεσης αναζήτησης επάνω δεξιά, 
                προβολή Λεπτομερειών ταινίας, σελίδα Μελέτη Περίπτωσης, όλα ενσωματωμένα σε μια εφαρμογή μιας σελίδας / 
                προοδευτική εφαρμογή Ιστού.
              </p>
              <p className="lead">
                Συντονίζουμε μία απομακρυσμένη βάση δεδομένων στο παρασκήνιο και εμφανίζουμε άμεσα το ζητούμενο
                περιεχόμενο. Προσκολλάμε το RESThook Router σε οποιονδήποτε διακομιστή διαδυκτύου και εγκαθιστούμε :
              </p>
              <ul className="lead">
                <li>Σύστημα αυθεντικοποίησης χρηστών</li>
                <li>Σύστημα ασφάλειας κλήσεων αιτημάτων</li>
                <li>Τεκμηρίωση API για προγραμματιστές</li>
                <li>Σύστημα πληροφοριών χρήσης (usage insights)</li>
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

export default Home;
