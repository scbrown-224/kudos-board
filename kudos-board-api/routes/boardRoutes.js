const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

// get all the cars
router.get("/", boardController.getAllBoards);
// //get car by ID
// router.get("/:board_id", boardController.getBoardById);
// //add a new car
// router.post("/", boardController.createBoard);
// //create a new car
// router.put("/:board_id", boardController.udpateBoard);
// //delete a car
// router.delete("/:board_id", boardController.deleteBoard);

module.exports = router;