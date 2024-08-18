
const SingleCard = ({title, description}) => {
    return (
        <div className="bg-[#f4f6f8] rounded-xl max-w-md min-h-36">
            <h3 className="text-lg font-semibold mt-4 ml-4">{title}</h3>
            <div className="border border-black border-opacity-15"></div>
            <p className="mt-1 ml-4">{description}</p>
        </div>
    );
};

export default SingleCard;