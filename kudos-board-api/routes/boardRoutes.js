const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

// get all the boards
router.get("/", boardController.getAllBoards);
//get board by ID
router.get("/:board_id", boardController.getBoardById);
//add a new board
router.post("/", boardController.createBoard);
//update board
router.put("/:board_id", boardController.updateBoard);
//delete a board
router.delete("/:board_id", boardController.deleteBoard);

// add card to board
router.post("/:board_id/cards", boardController.addCardtoBoard);

module.exports = router;
