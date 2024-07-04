import React from "react";
import { Link } from "react-router-dom";
import Board from "../Board/Board";
import FilterBar from "../FilterBar/FilterBar";
import "./BoardGrid.css";
import SearchBar from "../SearchBar/SearchBar";

const BoardGrid = ({ boards }) => {
  return (
    <div className="board-grid-container">
      <SearchBar />
      <FilterBar />
      <div className="board-grid">
        {boards.map((board, index) => (
          <div key={index} className="board-item">
            <Link to={`/boards/${board.board_id}`}>
              <Board
                boardId={board.board_id}
                title={board.title}
                category={board.category}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardGrid;





