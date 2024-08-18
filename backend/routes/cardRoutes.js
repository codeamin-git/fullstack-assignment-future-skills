const express = require('express');
const { createCard, getAllCards, getCardByTitle } = require('../models/cardModel');

const router = express.Router();

// Create a new card
router.post('/cards', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  const card = { title, description, createdAt: new Date() };
  try {
    await createCard(card);
    res.status(201).json({ message: "Card created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create card" });
  }
});

// Get all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await getAllCards();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve cards" });
  }
});

// Get a specific card by title
router.get('/cards/:title', async (req, res) => {
  const { title } = req.params;

  try {
    const card = await getCardByTitle(title);
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve card" });
  }
});

module.exports = router;
