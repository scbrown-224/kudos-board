import { useState, useEffect } from "react";
import React from "react";
import Card from "../CardModal/CardModal"; // Importing the Card component
import CreateCard from "../CreateBoard/CreateBoard"; // Importing the CreateCard component
import "./BoardModal.css"; // Importing the CSS file for BoardModal component

// Functional component to display and manage a board and its cards
const BoardModal = ({ match }) => {
	const [board, setBoard] = useState(null); // State for the board data
	const [cards, setCards] = useState([]); // State for the list of cards

	useEffect(() => {
		// Fetching the board data and its cards when component mounts or match.params.id changes
		const fetchBoard = () => {
			ApiService.getBoard(match.params.id).then((response) => {
				setBoard(response.data.board);
				setCards(response.data.cards);
			});
		};
		fetchBoard();
	}, [match.params.id]);

	// Function to add a new card to the board
	const addCard = (cardData) => {
		ApiService.createCard(board.id, cardData).then((response) => {
			setCards([...cards, response.data]);
		});
	};

	// Function to delete a card from the board
	const deleteCard = (cardId) => {
		ApiService.deleteCard(board.id, cardId).then(() => {
			setCards(cards.filter((card) => card.id !== cardId));
		});
	};

	// Function to upvote a card
	const upvoteCard = (cardId) => {
		ApiService.upvoteCard(board.id, cardId).then((response) => {
			setCards(
				cards.map((card) => (card.id === cardId ? response.data : card))
			);
		});
	};

	return board ? (
		// Display the board and its cards
		<div className="BoardModal">
			<h1>{board.title}</h1>
			<p>{board.description}</p>
			<CreateCard addCard={addCard} /> {/* Component to create a new card */}
			{cards.map((card) => (
				<Card
					key={card.id}
					card={card}
					onDelete={() => deleteCard(card.id)}
					onUpvote={() => upvoteCard(card.id)}
				/>
			))}
		</div>
	) : (
		<p>Loading...</p>
	);
};

export default BoardModal; // Exporting the BoardModal component as default
