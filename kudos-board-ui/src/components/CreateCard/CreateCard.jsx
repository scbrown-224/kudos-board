import React, { useState } from "react";

const CreateCard = ({ addCard }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addCard({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Card Title"
				required
			/>
			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Card Description"
				required
			></textarea>
			<button type="submit">Add Card</button>
		</form>
	);
};

export default CreateCard;
