
const AppBar = () => {
    return (
        <div className="bg-black rounded-t-2xl h-16 text-white flex justify-between px-2 md:px-16">

            <div className="flex gap-4 items-center h-full">
                <h1 className="text-xl font-bold">Abstract</h1>
                <span>|</span>
                <h2>Help Center</h2>
            </div>

            {/* post a card */}
            <div className="flex items-center h-full">
                <button className="border p-1 rounded-lg">Submit a request</button>
            </div>
        </div>
    );
};

export default AppBar;