import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

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

	const randomImage = `https://picsum.photos/200/300?random=${boardId}-${Math.floor(
		Math.random() * 1000
	)}`;

	return (
		<div>
			<div className="boardCard">
				<img src={randomImage} alt={title}></img>
				<h2>{title}</h2>
				{/* <div className="card-grid">
					{cards.map((card) => (
						<Card key={card.card_id} card={card} />
					))}
				</div> */}
				{/* change */}
				<h4>{category}</h4>
				{/* <CreateCard addCard={addCard} /> */}

				{/* <button onClick={() => handleButtonClick("View Board")}>
					View Board
				</button> */}
				<center>
					<button onClick={handleDeleteButtonClick}>Delete Board</button>
				</center>
			</div>
		</div>
	);
};

export default Board;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../Card/Card";

// const Board = ({ boardId, title, category, boards, setBoards }) => {
// 	const [cards, setCards] = useState([]);

// 	const addCard = async (cardData) => {
// 		try {
// 			const response = await axios.post(`/boards/${boardId}/cards`, cardData);
// 			setCards([...cards, response.data]);
// 		} catch (error) {
// 			console.error("Error adding card:", error);
// 		}
// 	};

// 	const handleDeleteButtonClick = async () => {
// 		//frontend
// 		const board = boards.find((board) => board.board_id === parseInt(boardId));
// 		const index = boards.indexOf(board);
// 		boards.splice(index, 1);
// 		setBoards([...boards]);

// 		//backend
// 		await axios.delete(`http://localhost:3000/boards/${boardId}`);
// 	};

// 	return (
// 		<div>
// 			<div className="boardCard">
// 				<img src="https://picsum.photos/200/300"></img>
// 				<h2>{title}</h2>
// 				{/* <div className="card-grid">
// 					{cards.map((card) => (
// 						<Card key={card.card_id} card={card} />
// 					))}
// 				</div> */}
// 				{/* change */}
// 				<h4>{category}</h4>
// 				{/* <CreateCard addCard={addCard} /> */}

// 				{/* <button onClick={() => handleButtonClick("View Board")}>
// 					View Board
// 				</button> */}
// 				<center>
// 					<button onClick={handleDeleteButtonClick}>Delete Board</button>
// 				</center>
// 			</div>
// 		</div>
// 	);
// };

// export default Board;