import { useState } from "react";
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

function App() {
	//set the active category filter to nothing
	const [activeCategory, setActiveCategory] = useState("");

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
									<SearchBar />
									{/* <FilterBar setActiveCategory={setActiveCategory} />{" "} */}
									{/* sets the activeCategory to the category selected */}
									<CreateCard type="board" />
									<BoardGrid />
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
