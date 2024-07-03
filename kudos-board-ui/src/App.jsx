import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FilterBar from "./components/FilterBar/FilterBar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import CreateBoardJazz from "./components/CreateBoardJazz/CreateBoardJazz.jsx";

function App() {
  // Set the active category filter to nothing
  const [activeCategory, setActiveCategory] = useState("");

  // Handle board creation
  const handleBoardCreated = (boardData) => {
    console.log("Board Created:", boardData);
    // Add your logic to handle the created board
  };

  // Handle card creation
  const handleCardCreated = (cardData) => {
    console.log("Card Created:", cardData);
    // Add your logic to handle the created card
  };

  return (
    <>
      <Header />
      <div className="App">
        <SearchBar />
        <FilterBar setActiveCategory={setActiveCategory} /> {/* sets the activeCategory to the category selected */}
        <CreateBoardJazz type="board" onSubmit={handleBoardCreated} />
        <CreateBoardJazz type="card" onSubmit={handleCardCreated} />
      </div>
      <Footer />
    </>
  );
};

export default App;
