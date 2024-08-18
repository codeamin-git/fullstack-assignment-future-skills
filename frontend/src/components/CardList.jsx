import SingleCard from "./SingleCard";
import useCard from "../hooks/useCard";

const CardList = () => {
    const [cards] = useCard();

    return (
        <div className="flex items-center justify-center my-10 md:my-20 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
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