import Hero from "./Hero";
import { Link } from "react-router-dom";
import WebsifyLogo from "../assets/images/logo_websify_whale.png";

const NotFound = () => {
    return (
      <>
        <Hero text="Η σελίδα δε βρέθηκε" />
        <div className="d-flex align-items-top justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Ωχ!</span> Η σελίδα δε βρέθηκε.</p>
                <p className="lead">
                    Η σελίδα που ψάχνετε δεν υπάρχει.
                  </p>
                  <Link className="nav-link active" aria-current="page" to="/">
                  Μετάβαση στην αρχική σελίδα
                  </Link>
                  <p className="lead">
                    <img src={WebsifyLogo} className="websify-logo-inpage" alt="Websify Logo" />
                  </p>
            </div>
        </div>
      </>
    );
  };
  
  export default NotFound;