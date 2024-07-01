const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to get all boards with optional filter
const getAllBoards = async (filter = {}) => {
    return prisma.board.findMany({
        where: filter
    });
};

module.exports = {
    getAllBoards,
};
