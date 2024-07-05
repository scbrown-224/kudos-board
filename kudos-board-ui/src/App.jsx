import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FilterBar from "./components/FilterBar/FilterBar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BoardGrid from "./components/BoardGrid/BoardGrid.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardGrid from "./components/CardGrid/CardGrid.jsx";
import CreateCard from "./components/CreateCard/CreateCard.jsx";
import axios from "axios";

function App() {
  const [activeCategory, setActiveCategory] = useState("");
  const [boards, setBoards] = useState([]);

  // adding search again
    const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchBoards = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}boards`);
      setBoards(response.data);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleNewBoard = (newBoard) => {
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="App">
                <CreateCard type="board" onSubmit={handleNewBoard} />
                {/* <FilterBar setActiveCategory={setActiveCategory} />
                <SearchBar /> */}
                <BoardGrid boards={boards} />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/boards/:boardId"
          element={<BoardDetail handleNewCard={handleNewCard} />}
        />
      </Routes>
    </BrowserRouter>
  );
}


const BoardDetail = ({ handleNewCard }) => {
  const { boardId } = useParams();
  const boardIdInt = parseInt(boardId, 10);
  const [newCard, setNewCard] = useState(null);

  const handleCardCreation = (card) => {
    handleNewCard(boardIdInt, card);
    setNewCard(card); // Update the state to trigger the re-render in CardGrid
  };

  return (
    <>
      <h1>Cards</h1>
      <CardGrid boardId={boardIdInt} newCard={newCard} />
      <CreateCard type="card" boardId={boardIdInt} onSubmit={handleCardCreation} />
    </>
  );
}

export default App;

