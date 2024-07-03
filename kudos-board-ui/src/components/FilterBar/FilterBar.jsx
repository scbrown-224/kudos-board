// import React, { useEffect, useState } from "react";
// import "../FilterBar/FilterBar.css";
// import axios from "axios";
// const FilterBoard = () => {
// 	const handleButtonClick = (category) => {
// 		setActiveCategory(category);
// 	};

// 	const [boards, setBoards] = useState([]);

// 	const handleAllButtonClick = async () => {
// 		try {
// 			// Fetch all boards from the backend
// 			const response = await axios.get("http://localhost:3000/boards");
// 			// Update the state with the fetched boards
// 			setBoards(response.data);
// 		} catch (error) {
// 			console.error("Error fetching all boards:", error);
// 		}
// 	};

// 	const handleCelebrationButtonClick = async () => {
// 		try {
			
// 			// Fetch all boards in the celebration category from the backend
// 			const response = await axios.get(
// 				"http://localhost:3000/boards?category=celebration"
// 			);
// 			console.log("here");
// 			// Update the state with the fetched boards
// 			setBoards(response.data);
// 		} catch (error) {
// 			console.error("Error fetching celebration boards:", error);
// 		}
// 	};

// 	return (
// 		<div className="filter-buttons">
// 			{/* Buttons to filter the board cards 
//           display each button, onclick would set the sort,
//           sort would be passed to backend 
//         */}
// 			<button onClick={() => handleAllButtonClick("All")}>All</button>
// 			<button onClick={() => handleButtonClick("Recent")}>Recent</button>
// 			<button onClick={() => handleCelebrationButtonClick("Celebration")}>
// 				Celebration
// 			</button>
// 			<button onClick={() => handleButtonClick("Thank You")}>Thank You</button>
// 			<button onClick={() => handleButtonClick("Inspiration")}>
// 				Inspiration
// 			</button>
// 		</div>
// 	);
// };
// export default FilterBoard;

// testing in boardGrid

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FilterBoard = () => {
//   const [boards, setBoards] = useState([]);

//   const fetchBoardsByCategory = async (category) => {
//     try {
//       const url = category ? `http://localhost:3000/boards?category=${category}` : "http://localhost:3000/boards";
//       const response = await axios.get(url);
//       console.log("Fetched boards:", response.data); // Log fetched boards for debugging
//       setBoards(response.data);
//     } catch (error) {
//       console.error(`Error fetching ${category || "all"} boards:`, error);
//     }
//   };

//   useEffect(() => {
//     // Fetch all boards initially when component mounts
//     fetchBoardsByCategory();
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <div className="filter-buttons">
//       <button onClick={() => fetchBoardsByCategory()}>All</button>
//       <button onClick={() => fetchBoardsByCategory("Recent")}>Recent</button>
//       <button onClick={() => fetchBoardsByCategory("Celebration")}>Celebration</button>
//       <button onClick={() => fetchBoardsByCategory("Thank You")}>Thank You</button>
//       <button onClick={() => fetchBoardsByCategory("Inspiration")}>Inspiration</button>

//       {/* Display boards */}
//       <div className="boards-container">
//         {boards.map((board) => (
//           <div key={board.id} className="board-item">
//             <h3>{board.title}</h3>
//             <p>{board.category}</p>
//             {/* Additional board details */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBoard;


import React from "react";
import "./FilterBar.css";

const FilterBar = ({ handleCategoryFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => handleCategoryFilter(null)}>All</button>
      <button onClick={() => handleCategoryFilter("Recent")}>Recent</button>
      <button onClick={() => handleCategoryFilter("Celebration")}>Celebration</button>
      <button onClick={() => handleCategoryFilter("Thank You")}>Thank You</button>
      <button onClick={() => handleCategoryFilter("Inspiration")}>Inspiration</button>
    </div>
  );
};

export default FilterBar;
