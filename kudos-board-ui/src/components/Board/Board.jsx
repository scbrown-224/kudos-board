import { useState } from "react";
import React from "react";
import "./Board.css"; // Importing the CSS file for Board component

// Functional component to display individual board information
const Board = ({ board, onClick }) => {
	return (
		// Wrapper div for board component, clickable to trigger onClick event
		<div className="Board" onClick={onClick}>
			{/* Display the title of the board */}
			<h2>{board.title}</h2>
			{/* Display the category of the board */}
			<p>{board.category}</p>
			{/* Conditionally display the author if it exists */}
			{board.author && <p>By {board.author}</p>}
		</div>
	);
};

export default Board; // Exporting the Board component as default
