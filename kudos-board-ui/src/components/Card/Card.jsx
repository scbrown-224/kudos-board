import { useState } from "react";
import React from "react";
import "./CardModal.css"; // Importing the CSS file for CardModal component

// Functional component to display individual card information
const CardModal = ({ card, onDelete, onUpvote }) => {
	return (
		<div className="CardModal">
			<h3>{card.title}</h3>
			<p>{card.description}</p>
			{card.author && <p>By {card.author}</p>}
			<img src={card.gifUrl} alt="gif" />
			<button onClick={onUpvote}>Upvote ({card.upvotes})</button>
			<button onClick={onDelete}>Delete</button>
		</div>
	);
};

export default CardModal; // Exporting the CardModal component as default
