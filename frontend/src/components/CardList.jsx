import { useEffect, useState } from "react";
import { getAllCards } from "../api/cardAPI";
import SingleCard from "./SingleCard";

const CardList = () => {
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
  }, []);
    return (
        <div className="flex items-center justify-center my-10 md:my-20 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
            {
                cards?.map((card) => (
                    <SingleCard
                     key={card?._id}
                     title={card?.title}
                     description={card?.description}
                      />
                ))
            }
            </div>
        </div>
    );
};

export default CardList;