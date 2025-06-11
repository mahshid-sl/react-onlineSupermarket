import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

function Search() {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex-1 max-w-xs sm:max-w-lg md:max-w-xl w-full"
    >
      <div className="relative">
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="w-full h-10 sm:h-12 px-4 pr-10 text-[#2F4F4F] rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F8961E] focus:border-[#F8961E] transition-all duration-200"
          placeholder="جستجو..."
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 -translate-y-1/2 text-[#F8961E] hover:scale-125 transition-transform duration-300"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}

export default Search;
