import React, { useEffect, useState } from "react";
import axios from "axios";
import CardModal from "../CardModal/CardModal";
import CreateCard from "../CreateCard/CreateCard";

const Board = ({ boardId, title, category, boards, setBoards }) => {
	const [cards, setCards] = useState([]);

	const addCard = async (cardData) => {
		try {
			const response = await axios.post(`/boards/${boardId}/cards`, cardData);
			setCards([...cards, response.data]);
		} catch (error) {
			console.error("Error adding card:", error);
		}
	};

	const handleDeleteButtonClick = async () => {
		//frontend
		const board = boards.find((board) => board.board_id === parseInt(boardId));
		const index = boards.indexOf(board);
		boards.splice(index, 1);
		setBoards([...boards]);

		//backend
		await axios.delete(`http://localhost:3000/boards/${boardId}`);
	};

	return (
		<div>
			<div>
				<img src="https://picsum.photos/200/300"></img>
				<h2>{title}</h2>
				<div className="card-grid">
					{cards.map((card) => (
						<CardModel key={card.card_id} card={card} />
					))}
				</div>
				{/* change */}
				<h4>{category}</h4>
				{/* <CreateCard addCard={addCard} /> */}

				<button onClick={() => handleButtonClick("View Board")}>
					View Board
				</button>
				<button onClick={handleDeleteButtonClick}>Delete Board</button>
			</div>
		</div>
	);
};

export default Board;
