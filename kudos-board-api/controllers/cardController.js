const cardModel = require('../models/cardModel');


const getAllCards = async (req, res) => {

    try {
        const cards = await cardModel.getAllCards();
        res.status(200).json(cards);
    } catch (error) {
        console.error("Error fetching cards:", error);  // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
};

//Function to get card by ID
const getCardById = async (req, res) => {
    try {
      const card = await cardModel.getCardById(req.params.card_id);
      if (card) {
        res.status(200).json(card);
      } else {
        res.status(404).json({ error: "card not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // new card
  const createCard = async (req, res) => {
    const cardData = req.body;
    try {
      const newCard = await cardModel.createCard(req.body);
      res.status(201).json(newCard);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //Function to update a car
const updateCard = async (req, res) => {
    try {
      const updatedCard = await cardModel.updateCard(req.params.card_id, req.body);
      if (updatedCard) {
        res.status(200).json(updateCard);
      } else {
        res.status(404).json({ error: "card not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //Function to delete a board
const deleteCard = async (req, res) => {
    try {
      const deletedCard = await cardModel.deleteCard(req.params.card_id);
      if (deletedCard) {
        res.status(200).json(deletedCard);
      } else {
        res.status(404).json({ error: "card not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getCardsByBoardId = async (req, res) => {
    try {
        const cards = await cardModel.getCardsByBoardId(req.params.board_id);
        if (cards) {
            res.status(200).json(cards);
        }
        else {
            res.status(404).json({ error: "Cards not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllCards,
    getCardById,
    createCard,
    updateCard, 
    deleteCard,
    getCardsByBoardId
};