import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Board from "../Board/Board";
import FilterBar from "../FilterBar/FilterBar";
import "./BoardGrid.css";

const BoardGrid = () => {
    const [boards, setBoards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const url = selectedCategory === "Recent"
                    ? "http://localhost:3000/boards?sort=creation"
                    : selectedCategory
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

    const handleSearch = async (value) => {
        setSearchTerm(value);

        try {
            const response = await axios.get(`http://localhost:3000/boards?title=${value}`);
            setBoards(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div className="board-grid-container">
            <FilterBar handleCategoryFilter={handleCategoryFilter} />
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search Boards ♡ ♡ ♡"
                />
            </div>
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



// highkey don't know what this version is for
// import React from "react";
// import { Link } from "react-router-dom";
// import Board from "../Board/Board";
// import FilterBar from "../FilterBar/FilterBar";
// import "./BoardGrid.css";
// import SearchBar from "../SearchBar/SearchBar";

// const BoardGrid = ({ boards }) => {
//   return (
//     <div className="board-grid-container">
//       <SearchBar />
//       <FilterBar />
//       <div className="board-grid">
//         {boards.map((board, index) => (
//           <div key={index} className="board-item">
//             <Link to={`/boards/${board.board_id}`}>
//               <Board
//                 boardId={board.board_id}
//                 title={board.title}
//                 category={board.category}
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoardGrid;





