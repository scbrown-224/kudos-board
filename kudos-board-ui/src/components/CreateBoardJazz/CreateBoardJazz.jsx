import React, { useState } from "react";
import "./CreateBoardJazz.css"; // Ensure your CSS file is correctly named


const CreateBoardJazz = ({ type, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [gifUrl, setGifUrl] = useState(""); 

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setAuthor("");
    setGifUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, author, gifUrl, category };
    onSubmit(data);
    handleCloseModal();
  };

  return (
    <>
      <button onClick={handleOpenModal}>
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
              <form className="CreateCard" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                />
                <input              /*convert to dropdown with categories*/
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  required
                />
                {type === "board" && (
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    required
                  />
                )}
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author"
                />
                {type !== "board" && (
                  <input
                    type="text"
                    value={gifUrl}
                    onChange={(e) => setGifUrl(e.target.value)}
                    placeholder="Gif URL"
                    required
                  />
                    

                  
                )}
                <button type="submit">
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

export default CreateBoardJazz;
