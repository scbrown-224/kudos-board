import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FilterBar from "./components/FilterBar/FilterBar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import BoardGrid from "./components/BoardGrid/BoardGrid.jsx";

function App() {
	//set the active category filter to nothing
	const [activeCategory, setActiveCategory] = useState("");

	return (
		<>
			<Header />
			<div className="App">
				<SearchBar />
				<FilterBar setActiveCategory={setActiveCategory} />{" "}
				{/* sets the activeCategory to the category selected */}
        hello from the app
        <BoardGrid />
				<Footer />
			</div>
		</>
	);
}
export default App;
