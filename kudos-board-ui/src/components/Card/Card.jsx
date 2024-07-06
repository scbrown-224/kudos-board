import React from "react";
import "./Card.css"; // Importing the CSS file for Card component
import axios from "axios";

// Functional component to display individual card information
const Card = ({ cardId, title, description, gifUrl, author, setCards,upvotes,onUpvote }) => {

  const handleDeleteButtonClick = async () => {
    try {

      setCards(prevCards => prevCards.filter(card => card.card_id !== cardId));


      await axios.delete(`http://localhost:3000/cards/${cardId}`);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

 


  return (
    <div className="CardModal">
      <h3>{title}</h3>
      <p>{description}</p>
      {author && <p>By {author}</p>}
      {gifUrl && <img src={gifUrl} alt="GIF" />} 
      <button onClick={handleDeleteButtonClick}>Delete</button>
      <button onClick={onUpvote}>Upvote ({upvotes})</button>
    </div>
  );
};

export default Card; // Exporting the Card component as default
