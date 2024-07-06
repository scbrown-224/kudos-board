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
        console.log("Fetching cards for boardId:", boardId);
        const response = await axios.get(`http://localhost:3000/boards/${boardId}`);
        console.log("API response:", response.data);
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
        {cards.map((card) => (
          <div key={card.card_id} className="card-item">
            <Card
              title={card.title}
              description={card.description}
              gifUrl={card.gif}
              author={card.author}
              upvotes={card.upvotes}
              onDelete={() => handleDelete(card.card_id)}
              onUpvote={() => handleUpvote(card.card_id)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  // Add functions for handling delete and upvote if necessary
  const handleDelete = (cardId) => {
    // Add logic to handle delete
  };

  const handleUpvote = (cardId) => {
    // Add logic to handle upvote
  };
};

export default CardGrid;
