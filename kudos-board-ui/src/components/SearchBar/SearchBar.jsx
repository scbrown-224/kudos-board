import { useState,useEffect } from "react";
import React from "react";
import "../SearchBar/SearchBar.css";

//


const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState(""); // set the useState to null by default
  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    const submittedData = event.target.elements.searchInput.value;
    setSearchTerm(submittedData);
  };



  return (
    <>
      <div className="search-bar">

{/* //searching through the different posted boards 
//put board not found if no board is available */}
<form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              name="searchInput"
              placeholder="Search Boards ♡ ♡ ♡"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>




      </div>

  </>
  );
};
export default SearchBar;