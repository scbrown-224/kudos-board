const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to get all boards with optional filter
const getAllCards = async () => {
    return prisma.card.findMany();
};

// get cards by id
const getCardById = async (card_id) => {
    return prisma.card.findUnique({ where: {card_id: parseInt(card_id)}})
}

// create new card
const createCard = async (cardData) => {
    return prisma.card.create({ data: cardData });
  };

  //Function to update a board
const updateCard = async (card_id, cardData) => {
    return prisma.card.update({
      where: { card_id: parseInt(card_id) },
      data: cardData,
    });
  };

  //Function to delete a card
const deleteCard = async (card_id) => {
    return prisma.card.delete({ where: { card_id: parseInt(card_id) } });
  };
  

module.exports = {
    getAllCards,
    getCardById, 
    createCard, 
    updateCard, 
    deleteCard
};