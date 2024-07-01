import { useState } from "react";
import React from "react";
import "/SearchBar.css";
import "../SearchBar/SearchBar.css";

//


const SearchBar = () => {
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