import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

export const createCard = async (cardData) => {
  const response = await axios.post(`${API_URL}/cards`, cardData);
  return response.data;
};

export const getAllCards = async () => {
  const response = await axios.get(`${API_URL}/cards`);
  return response.data;
};

export const getCardByTitle = async (title) => {
  const response = await axios.get(`${API_URL}/cards/${title}`);
  return response.data;
};
