import { useState } from "react";
import React from "react";
import "./CreateBoard.css"; // Importing the CSS file for CreateBoard component

// Functional component to create a new board or card
const CreateBoard = ({ onBoardCreated, addCard }) => {
	const [title, setTitle] = useState(""); // State for title input
	const [description, setDescription] = useState(""); // State for description input
	const [category, setCategory] = useState(""); // State for category input
	const [author, setAuthor] = useState(""); // State for author input
	const [gifUrl, setGifUrl] = useState(""); // State for gif URL input (for cards)

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Check if creating a board or card
		if (onBoardCreated) {
			onBoardCreated({ title, description, category, author });
		} else if (addCard) {
			addCard({ title, description, author, gifUrl });
		}
		// Reset input fields
		setTitle("");
		setDescription("");
		setCategory("");
		setAuthor("");
		setGifUrl("");
	};

	return (
		<form className="CreateBoard" onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Title"
				required
			/>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Description"
				required
			/>
			{onBoardCreated && (
				<input
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					placeholder="Category"
					required
				/>
			)}
			<input
				type="text"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				placeholder="Author"
			/>
			{!onBoardCreated && (
				<input
					type="text"
					value={gifUrl}
					onChange={(e) => setGifUrl(e.target.value)}
					placeholder="Gif URL"
					required
				/>
			)}
			<button type="submit">
				{onBoardCreated ? "Create Board" : "Create Card"}
			</button>
		</form>
	);
};

export default CreateBoard; // Exporting the CreateBoard component as default
