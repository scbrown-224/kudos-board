import React, { useEffect, useState } from "react";
import "../FilterBar/FilterBar.css";
import axios from "axios";
const FilterBoard = () => {
	
	const handleButtonClick = (category) => {
		setActiveCategory(category);
	};

	const [boards, setBoards] = useState([]);

	const handleAllButtonClick = async () => {
		try {
			// Fetch all boards from the backend
			const response = await axios.get("http://localhost:3000/boards");
			// Update the state with the fetched boards
			setBoards(response.data);
		} catch (error) {
			console.error("Error fetching all boards:", error);
		}
	};

	const handleCelebrationButtonClick = async () => {
		try {
			console.log("here");
			// Fetch all boards in the celebration category from the backend
			const response = await axios.get(
				"http://localhost:3000/boards?category=Celebration"
			);
			// Update the state with the fetched boards
			setBoards(response.data);
		} catch (error) {
			console.error("Error fetching celebration boards:", error);
		}
	};

	return (
		<div className="filter-buttons">
			{/* Buttons to filter the board cards 
          display each button, onclick would set the sort,
          sort would be passed to backend 
        */}
			<button onClick={() => handleAllButtonClick("All")}>All</button>
			<button onClick={() => handleButtonClick("Recent")}>Recent</button>
			<button onClick={() => handleCelebrationButtonClick("Celebration")}>
				Celebration
			</button>
			<button onClick={() => handleButtonClick("Thank You")}>Thank You</button>
			<button onClick={() => handleButtonClick("Inspiration")}>
				Inspiration
			</button>
		</div>
	);
};
export default FilterBoard;
