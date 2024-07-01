const boardModel = require('../models/boardModel');


const getAllBoards = async (req, res) => {
    console.log("Received request to get all boards"); // Log for debugging
    const { category } = req.query;
    let filter = {};

    if (category) {
        filter.category = {
          equals: category, 
          mode: 'insensitive'
        };
    }

    try {
        const boards = await boardModel.getAllBoards(filter);
        res.status(200).json(boards);
    } catch (error) {
        console.error("Error fetching boards:", error);  // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
};

//Function to get car by ID
const getBoardById = async (req, res) => {
    try {
      const board = await boardModel.getBoardById(req.params.board_id);
      if (board) {
        res.status(200).json(board);
      } else {
        res.status(404).json({ error: "board not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // new board
  const createBoard = async (req, res) => {
    const boardData = req.body;
    try {
      const newBoard = await boardModel.createBoard(req.body);
      res.status(201).json(newBoard);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //Function to update a car
const updateBoard = async (req, res) => {
    try {
      const updatedBoard = await boardModel.updateBoard(req.params.board_id, req.body);
      if (updateBoard) {
        res.status(200).json(updateBoard);
      } else {
        res.status(404).json({ error: "board not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //Function to delete a board
const deleteBoard = async (req, res) => {
    try {
      const deletedBoard = await boardModel.deleteBoard(req.params.board_id);
      if (deleteBoard) {
        res.status(200).json(deleteBoard);
      } else {
        res.status(404).json({ error: "board not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    getAllBoards,
    getBoardById, 
    createBoard, 
    updateBoard, 
    deleteBoard
};

