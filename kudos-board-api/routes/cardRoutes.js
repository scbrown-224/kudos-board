const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

// get all the cards
router.get("/", cardController.getAllCards);
//get board by ID
router.get("/:card_id", cardController.getCardById);
//add a new card
router.post("/", cardController.createCard);
//update card
router.put("/:card_id", cardController.updateCard);
//delete a card
router.delete("/:card_id", cardController.deleteCard);

module.exports = router;