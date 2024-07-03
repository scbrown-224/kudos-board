import React from "react";
import "./FilterBar.css";

const FilterBar = ({ handleCategoryFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => handleCategoryFilter(null)}>All</button>
      <button onClick={() => handleCategoryFilter("Recent")}>Recent</button>
      <button onClick={() => handleCategoryFilter("Celebration")}>Celebration</button>
      <button onClick={() => handleCategoryFilter("Thank You")}>Thank You</button>
      <button onClick={() => handleCategoryFilter("Inspiration")}>Inspiration</button>
    </div>
  );
};

export default FilterBar;
