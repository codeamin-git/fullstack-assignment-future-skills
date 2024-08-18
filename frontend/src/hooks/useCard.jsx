import { useEffect, useState } from "react";
import { getAllCards } from "../api/cardAPI";

const useCard = () => {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getAllCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, [cards]);
  
    return [cards]
};

export default useCard;