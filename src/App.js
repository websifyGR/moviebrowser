import React from 'react';
import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import SearchInput from "./components/SearchInput";
//import NotFound from "./components/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=el-GR&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
        
    }
  }, [searchText])


  return (
    <div>
      <Navbar />
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path='*' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
