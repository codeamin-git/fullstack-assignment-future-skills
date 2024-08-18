import SingleCard from "./SingleCard";
import useCards from "../hooks/useCards";
import PropTypes from 'prop-types'

const CardList = ({searchTerm}) => {
    const { cards, loading, error } = useCards(searchTerm);

    if (loading) {
        return <p>Loading cards...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }

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

CardList.propTypes = {
    searchTerm: PropTypes.string
}