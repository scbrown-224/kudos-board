// import { useState,useEffect } from "react";
// import React from "react";
// import "../SearchBar/SearchBar.css";

// //


// const SearchBar = () => {

//   const [searchTerm, setSearchTerm] = useState(""); // set the useState to null by default
//   const [searchResults, setSearchResults] = useState([]);
  
//   const handleSearchSubmit = async (event) => {
//     event.preventDefault(); 
//     const submittedData = event.target.elements.searchInput.value;
//     setSearchTerm(submittedData);

//     try {
//       const response = await fetch(`http://localhost:3000/boards?title=${submittedData}`);
//       const data = await response.json();
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }

//   };



//   return (
//     <>
//       <div className="search-bar">

// {/* //searching through the different posted boards 
// //put board not found if no board is available */}
// <form onSubmit={handleSearchSubmit}>
//             <input
//               type="text"
//               name="searchInput"
//               placeholder="Search Boards ♡ ♡ ♡"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button type="submit">Search</button>
//           </form>

//         {/* search results */}
//         <div className="search-results">
//           {searchResults.map((board) => (
//             <div key={board.board_id} className="board-item">
//               <h3>{board.title}</h3>
//               <p>{board.category}</p>
//             </div>
//           ))}
//         </div>

// {/* lowkey should the sorting logic go in app? */}

//       </div>

//   </>
//   );
// };
// export default SearchBar;

import React, { useState } from "react";
import "../SearchBar/SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearchSubmit(searchInput);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search Boards "
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;

// sorting directly in boardgrid rn