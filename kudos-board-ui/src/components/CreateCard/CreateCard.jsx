import React, { useState } from "react";
import "./CreateCard.css";
import axios from "axios";

const CreateCard = ({ type, onSubmit, boardId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gifUrl, setGifUrl] = useState("");
  const [gifs, setGifs] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);
  const [gifCopied, setGifCopied] = useState(false);
  const [searchingGifs, setSearchingGifs] = useState(false); 
  const dataUrl = "http://localhost:3000/";
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setGifUrl("");
    setGifs([]);
    setSelectedGif(null); 
    setGifCopied(false);
    setSearchingGifs(false); 
  };

  const handleBoardSubmit = async (e) => {
    e.preventDefault();
    const boardData = { title, image: "https://picsum.photos/200/300", category };
    try {
      const response = await axios.post(`${dataUrl}boards`, boardData);
      onSubmit(response.data); // Pass the newly created board data to the parent component
      handleCloseModal();
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    const cardData = { title, description, gif: selectedGif, board_id: boardId };
    try {
      const response = await axios.post(`${dataUrl}cards`, cardData);
      onSubmit(response.data); // Pass the newly created card data to the parent component
      handleCloseModal();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  

  // Handle GIF search
  const handleSearchGifs = async (e) => {
    e.preventDefault();
    if (gifUrl.trim() !== "") {
      try {
        setSearchingGifs(true); // Set searching state
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
          params: {
            api_key: apiKey,
            q: gifUrl,
            limit: 6
          }
        });
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      } finally {
        setSearchingGifs(false); // Reset searching state
      }
    }
  };

  // Handle GIF selection
  const handleGifSelect = (url) => {
    setSelectedGif(url);
    navigator.clipboard.writeText(url).then(() => {
      setGifCopied(true);

    });
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
              <form className="CreateCard" onSubmit={type === "board" ? handleBoardSubmit : handleCardSubmit}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a Title"
                  required
                  className="styled-input"
                />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author"
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
                    <button type="button" onClick={handleSearchGifs}>Search</button>
                    <div className="gif-results">
                      {searchingGifs ? (
                        <p>Searching for GIFs...</p>
                      ) : (
                        gifs.map((gif) => (
                          <img
                            key={gif.id}
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                            onClick={() => handleGifSelect(gif.images.fixed_height.url)}
                          />
                        ))
                      )}
                    </div>
                    {selectedGif && (
                      <div className="copy-url-section">
                        <input
                          type="text"
                          value={selectedGif}
                          readOnly
                          className="styled-input"
                        />
                  
                      </div>
                    )}
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
