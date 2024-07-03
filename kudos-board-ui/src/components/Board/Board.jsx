import React, { useEffect, useState } from "react";
import axios from "axios";
import CardModal from "../CardModal/CardModal";
import CreateCard from "../CreateCard/CreateCard";

const Board = ({ boardId, title }) => {
	const [cards, setCards] = useState([]);

	const addCard = async (cardData) => {
		try {
			const response = await axios.post(`/boards/${boardId}/cards`, cardData);
			setCards([...cards, response.data]);
		} catch (error) {
			console.error("Error adding card:", error);
		}
  };
  
	return (
		<div>
			<div>
				<h2>{title}</h2>
				<div className="card-grid">
						{cards.map((card) => (
							<CardModel key={card.card_id} card={card} />
						))}
					</div>
					<CreateCard addCard={addCard} />
			</div>
		</div>
	);
};

export default Board;
