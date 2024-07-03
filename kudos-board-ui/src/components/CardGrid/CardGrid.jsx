import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./CardGrid.css";
import { useParams } from "react-router";

const CardGrid = () => {
	const [cards, setCards] = useState([]);
	const { boardId } = useParams();

	useEffect(() => {
		const fetchCards = async () => {
			try {
				console.log(boardId);
				const response = await axios.get(
					`http://localhost:3000/boards/${boardId}`
				);
				console.log(response.data);
				setCards(response.data.cards);
			} catch (error) {
				console.error("Error fetching cards:", error);
			}
		};

		fetchCards();
	}, []);

	return (
		<div className="card-grid-container">
			<div className="card-grid">
				{cards.map((card, index) => (
					<div key={index} className="card-item">
						<Card
							title={card.title}
							description={card.description}
							cards={cards}
							setCards={setCards}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
