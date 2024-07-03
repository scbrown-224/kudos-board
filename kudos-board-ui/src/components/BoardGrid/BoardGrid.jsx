// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Board from "../Board/Board";
// import FilterBar from "../FilterBar/FilterBar";
// import "./BoardGrid.css";

// const BoardGrid = () => {
//   const [boards, setBoards] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     const fetchBoards = async () => {
//       try {
//         const url = selectedCategory ? `http://localhost:3000/boards?category=${selectedCategory}` : "http://localhost:3000/boards";
//         const response = await axios.get(url);
//         setBoards(response.data);
//       } catch (error) {
//         console.error("Error fetching boards:", error);
//       }
//     };

//     fetchBoards();
//   }, [selectedCategory]); // Fetch boards whenever selectedCategory changes

//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="board-grid-container">

//       <FilterBar handleCategoryFilter={handleCategoryFilter} />
//       <div className="board-grid">
//         {boards.map((board, index) => (
//           <div key={index} className="board-item">
//             <Link to={`/boards/${board.board_id}`}>
//               <Board
//                 boardId={board.board_id}
//                 title={board.title}
//                 category={board.category}
//                 boards={boards}
//                 setBoards={setBoards}
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoardGrid;

// ^^working for category button

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Board from "../Board/Board";
import FilterBar from "../FilterBar/FilterBar";
import "./BoardGrid.css";

const BoardGrid = () => {
	const [boards, setBoards] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		const fetchBoards = async () => {
			try {
				const url = selectedCategory
					? `http://localhost:3000/boards?category=${selectedCategory}`
					: "http://localhost:3000/boards";
				const response = await axios.get(url);
				setBoards(response.data);
			} catch (error) {
				console.error("Error fetching boards:", error);
			}
		};

		fetchBoards();
	}, [selectedCategory]); // Fetch boards whenever selectedCategory changes

	const handleCategoryFilter = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="board-grid-container">
			<FilterBar handleCategoryFilter={handleCategoryFilter} />
			<div className="board-grid">
				{boards.map((board, index) => (
					<div key={index} className="board-item">
						<Link to={`/boards/${board.board_id}`}>
							<Board
								boardId={board.board_id}
								title={board.title}
								category={board.category}
								boards={boards}
								setBoards={setBoards}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BoardGrid;
