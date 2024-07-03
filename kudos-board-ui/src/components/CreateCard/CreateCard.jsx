import React, { useState } from "react";
import "./CreateCard.css";

const CreateCard = ({ type, onSubmit }) => {
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
              <form className="CreateCard" onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder={type === "board" ? "Author" : "Owner"}
                  required
                  className="styled-input"
                />
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
