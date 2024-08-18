const { getDB } = require('../config/db');

const collection = () => getDB().collection('cards');

// Create a card
async function createCard(card) {
  return await collection().insertOne(card);
}

// Retrieve all cards
async function getAllCards() {
  return await collection().find({}).toArray();
}

// Get a specific card by title
async function getCardByTitle(title) {
  return await collection().findOne({
    title: { $regex: new RegExp(title, 'i') }
  });;
}

module.exports = { createCard, getAllCards, getCardByTitle };
