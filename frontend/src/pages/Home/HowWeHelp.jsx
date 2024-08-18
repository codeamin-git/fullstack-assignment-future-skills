import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const HowWeHelp = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm)
    }
    return (
        <div>
            {/* search input */}
            <div className="bg-[#dadaf1] flex flex-col items-center justify-center gap-8 py-14 md:py-32 p-4">
                <h1 className="text-6xl">How can we help?</h1>
                <div className="relative flex items-center w-full max-w-2xl border border-black">
    <input
        type="text"
        placeholder="Search"
        className="pl-4 pr-10 py-2 w-full bg-white text-black outline-none"
        value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch} className="absolute right-2 text-black">
    <GoArrowRight />
    </button>
</div>

            </div>
        </div>
    );
};

export default HowWeHelp;