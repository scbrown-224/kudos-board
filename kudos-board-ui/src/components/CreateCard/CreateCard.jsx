import React, { useState } from "react";
import "./CreateCard.css";
import axios from "axios";

const CreateCard = ({ type, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gifUrl, setGifUrl] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setGifUrl("");
  };

  const handleBoardSubmit = async (e) => {
    e.preventDefault();
    const boardData = { title, image: "https://picsum.photos/200/300", category };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}boards`, boardData);
    //   onSubmit(response.data); // Pass the newly created board data to the parent component
      handleCloseModal();
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    const cardData = { title, gif, description };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}cards`, cardData);
    //   onSubmit(response.data); // Pass the newly created board data to the parent component
      handleCloseModal();
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  return (
    <>
      <button className="create-buttons" onClick={handleOpenModal}>
        {type === "board" ? "Create Board" : "Create Card"}
      </button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form className="CreateCard" onSubmit={handleBoardSubmit}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a Title"
                  required
                  className="styled-input"
                />
                {type === "board" && (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="styled-input"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Recent">Recent</option>
                    <option value="Celebration">Celebration</option>
                    <option value="Thank You">Thank You</option>
                    <option value="Inspiration">Inspiration</option>
                  </select>
                )}
                </form>
                <form form className="CreateCard" onSubmit={handleCardSubmit}>
                {type !== "board" && (
                  <>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                      required
                      className="styled-input"
                    />
                    <input
                      type="text"
                      value={gifUrl}
                      onChange={(e) => setGifUrl(e.target.value)}
                      placeholder="Search for a gif..."
                      className="styled-input"
                    />
                  </>
                )}
                <button type="submit" className="create-card-button">
                  {type === "board" ? "Create Board" : "Create Card"}
                </button>
                </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCard;

// import React, { useState } from "react";
// import "./CreateCard.css";
// import axios from "axios";

// const CreateCard = ({ type, onSubmit }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [gifUrl, setGifUrl] = useState("");

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//     setTitle("");
//     setDescription("");
//     setCategory("");
//     setGifUrl("");
//   };

//   const handleBoardSubmit = async (e) => {
//     e.preventDefault();
//     const boardData = { title, image: "https://picsum.photos/200/300", category };
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}boards`, boardData);
//       onSubmit(response.data); // Pass the newly created board data to the parent component
//       handleCloseModal();
//     } catch (error) {
//       console.error("Error creating board:", error);
//     }
//   };

//   const handleCardSubmit = async (e) => {
//     e.preventDefault();
//     const cardData = { title, board, description, gif: gifUrl };
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}cards`, cardData);
//       onSubmit(response.data); // Pass the newly created card data to the parent component
//       handleCloseModal();
//     } catch (error) {
//       console.error("Error creating card:", error);
//     }
//   };

//   return (
//     <>
//       <button className="create-buttons" onClick={handleOpenModal}>
//         {type === "board" ? "Create Board" : "Create Card"}
//       </button>
//       {isOpen && (
//         <div className="modal" onClick={handleCloseModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <button className="modal-close" onClick={handleCloseModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <form className="CreateCard" onSubmit={type === "board" ? handleBoardSubmit : handleCardSubmit}>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   placeholder="Enter a Title"
//                   required
//                   className="styled-input"
//                 />
//                 {type === "board" && (
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     required
//                     className="styled-input"
//                   >
//                     <option value="" disabled>
//                       Select a category
//                     </option>
//                     <option value="Recent">Recent</option>
//                     <option value="Celebration">Celebration</option>
//                     <option value="Thank You">Thank You</option>
//                     <option value="Inspiration">Inspiration</option>
//                   </select>
//                 )}
//                 {type !== "board" && (
//                   <>
//                     <input
//                       type="text"
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Description"
//                       required
//                       className="styled-input"
//                     />
//                     <input
//                       type="text"
//                       value={gifUrl}
//                       onChange={(e) => setGifUrl(e.target.value)}
//                       placeholder="Search for a gif..."
//                       className="styled-input"
//                     />
//                   </>
//                 )}
//                 <button type="submit" className="create-card-button">
//                   {type === "board" ? "Create Board" : "Create Card"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateCard;


