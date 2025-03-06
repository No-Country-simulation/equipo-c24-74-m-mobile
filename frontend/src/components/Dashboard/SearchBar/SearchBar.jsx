const SearchBar = () => {
    return (
        <div className="w-full p-4">
            <input
                type="text"
                placeholder="🔍 ¿Qué buscas?..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default SearchBar;
