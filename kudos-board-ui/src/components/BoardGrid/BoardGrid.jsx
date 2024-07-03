import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "../Board/Board";
import "./BoardGrid.css";

const BoardGrid = () => {
	const [boards, setBoards] = useState([]);

	useEffect(() => {
		const fetchBoards = async () => {
			try {
				const response = await axios.get("http://localhost:3000/boards");
				console.log(response.data);
				setBoards(response.data);
			} catch (error) {
				console.error("Error fetching boards:", error);
			}
		};

		fetchBoards();
	}, []);

	return (
		<div className="board-grid-container">
			<h1>Boards</h1>
			<div className="board-grid">
				{boards.map((board, index) => (
					<div key={index} className="board-item">
						<Board boardId={board.board_id} title={board.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BoardGrid;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Board from "../Board/Board";

// const BoardGrid = () => {
// 	const [boards, setBoards] = useState([]);

// 	useEffect(() => {
// 		const fetchBoards = async () => {
// 			try {
// 				const response = await axios.get("http://localhost:3000/boards");
// 				console.log(response.data);
// 				setBoards(response.data);
// 			} catch (error) {
// 				console.error("Error fetching boards:", error);
// 			}
// 		};

// 		fetchBoards();
// 	}, []);

// 	return (
// 		<div>
//       <h1>Boards</h1>
// 			<div className="board-grid">
// 				{boards.map((board, index) => (
// 					<Board key={index} boardId={board.board_id} title={board.title} />
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default BoardGrid;
