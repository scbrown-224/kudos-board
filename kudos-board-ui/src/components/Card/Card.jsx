import React from "react";
import "./Card.css"; // Importing the CSS file for Card component

// Functional component to display individual card information
const Card = ({ title, description, gifUrl, author, upvotes, onDelete, onUpvote }) => {
  return (
    <div className="CardModal">
      <h3>{title}</h3>
      <p>{description}</p>
      {author && <p>By {author}</p>}
      {gifUrl && <img src={gifUrl} alt="gif" />}
      <button onClick={onUpvote}>Upvote ({upvotes})</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Card; // Exporting the Card component as default
