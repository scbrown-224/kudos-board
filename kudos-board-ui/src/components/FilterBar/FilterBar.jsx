import React from "react";
import '../FilterBar/FilterBar'
const FilterBoard = () => {

  const handleButtonClick = (category) => {setActiveCategory(category);};
  return (
      <div className="filter-buttons">
        {/* Buttons to filter the board cards 
          display each button, onclick would set the sort,
          sort would be passed to backend 
        */}
      <button onClick={() => handleButtonClick("All")}>All</button>
      <button onClick={() => handleButtonClick("Recent")}>Recent</button>
      <button onClick={() => handleButtonClick("Celebration")}>Celebration</button>
      <button onClick={() => handleButtonClick("Thank You")}>Thank You</button>
      <button onClick={() => handleButtonClick("Inspiration")}>Inspiration</button>



      </div>
  );
};
export default FilterBoard;

