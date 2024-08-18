import { useEffect, useState } from "react";
import { getAllCards, getCardByTitle } from "../api/cardAPI";

const useCards = (searchTerm) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await getCardByTitle(searchTerm);

          data = Array.isArray(data) ? data : [data];

        } else {
          data = await getAllCards();
        }

        setCards(data);
      } catch (error) {
        setError('Error fetching cards');
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [searchTerm]);
  
  return { cards, loading, error };
};

export default useCards;