const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBoards = async (filter = {}, orderBy = []) => {
    return prisma.board.findMany({
        where: filter,
        orderBy: orderBy,
        include: {
            cards: true, // Include associated cards
        },
    });
};

// get boards by id
const getBoardById = async (board_id) => {
    return prisma.board.findUnique({ where: {board_id: parseInt(board_id)}})
}

// create new board
const createBoard = async (boardData) => {
    return prisma.board.create({ data: boardData });
  };

  //Function to update a board
const updateBoard = async (board_id, boardData) => {
    return prisma.board.update({
      where: { board_id: parseInt(board_id) },
      data: boardData,
    });
  };

  //Function to delete a car
const deleteBoard = async (board_id) => {
    return prisma.board.delete({ where: { board_id: parseInt(board_id) } });
  };


  const addCardtoOrder = async (board_id, cardData) => {
    return prisma.card.create({
        data: {
            ...cardData,
            board: {
                connect: { board_id: board_id }
            }
        }
    });
};
  

module.exports = {
    getAllBoards,
    getBoardById, 
    createBoard, 
    updateBoard, 
    deleteBoard, 
    addCardtoOrder
};
