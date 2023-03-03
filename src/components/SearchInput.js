import React from 'react';
import { useHistory} from "react-router-dom";


const SearchInput = ({ searchText, setSearchText }) => {
    const history = useHistory()
  
    const updateSearchText = (e) => {
      history.push('/search')
      setSearchText(e.target.value)
    }

    return (
       <>
        <div className="topSearch"> 
         <form className="input-group input-group-lg">
         <span className="input-group-text" id="movie-search">Αναζήτηση ταινίας</span> 
           <input type="search" 
                  className="form-control" 
                  placeholder="" 
                  aria-label="Αναζήτηση ταινίας" 
                  aria-describedby="movie-search"
                  value={searchText} 
                  onChange={updateSearchText}
            />
        </form>
        </div>
       </>
        );
       };

export default SearchInput;