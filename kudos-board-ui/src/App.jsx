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
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="App">
                  <CreateCard type="board" onSubmit={handleNewBoard} />
                  <BoardGrid boards={boards} />
                  <Footer />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/boards/:boardId"
            element={
              <>
                <h1>Cards</h1>
                <CreateCard type="card" />
                <CardGrid />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

