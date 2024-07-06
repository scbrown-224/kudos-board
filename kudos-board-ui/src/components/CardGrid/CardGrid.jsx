import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./CardGrid.css";
import { useParams } from "react-router";

const CardGrid = () => {
	const [cards, setCards] = useState([]);
	const { boardId } = useParams();
	const dataUrl = "http://localhost:3000/"; 
	console.log('here');

	useEffect(() => {
		const fetchCards = async () => {
			try {
				console.log(boardId);
				const response = await axios.get(
					`http://localhost:3000/boards/${boardId}`
				);
				console.log(response.data.cards);
				setCards(response.data.cards);
			} catch (error) {
				console.error("Error fetching cards:", error);
			}
		};

    if (boardId) {
      fetchCards();
    }
  }, [boardId]);

  

	return (
		<div className="card-grid-container">
			<div className="card-grid">
				{cards.map((card, index) => (
					<div key={index} className="card-item">
						<Card
							cardId={card.card_id}
							title={card.title}
							description={card.description}
							boardId={card.board_id}
							gifUrl={card.gif}
							author={card.author}
							card={card}
							
              setCards={setCards}
              
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
