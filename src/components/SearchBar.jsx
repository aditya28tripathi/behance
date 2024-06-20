const SearchBar = () => {
    const [query, setQuery] = useState('');


const [suggestions, setSuggestions] = useState([]);
  
    const handleChange = (el) => 
      {

      const value = el.target.value;
      setQuery(value);
      if (value) 
        
        {
        const Suggestionss = getSuggestions(value);
        setSuggestions(Suggestionss);
      } else {
        setSuggestions([]);
      }
    };
  
    const getSuggestions = (value) => {
      const suggestions = [
        `${value} design`,
        `${value} art`,
        `${value} photography`,
        `creative ${value}`,
        `digital ${value}`,
      ];
      return suggestions;
    };
  
    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion);
      setSuggestions([]);
    };
  
    return (
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search the creative world at work..."
          className="bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] custom-placeholder"
        />
        <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">



          <IoSearchSharp />
        </div>



        {suggestions.length > 0 && (
          <div className="absolute bg-white shadow-lg rounded-md py-2 mt-2 w-full">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  