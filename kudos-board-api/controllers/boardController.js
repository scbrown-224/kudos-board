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

module.exports = {
    getAllBoards,
};

