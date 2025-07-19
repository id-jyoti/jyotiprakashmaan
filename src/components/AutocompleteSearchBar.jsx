import { useState } from "react";
import destinations from "../data/destinations.json"; // existing file with objects

function AutocompleteSearchBar({ onSelect }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Extract names from destination objects
  const destinationNames = destinations.map((d) => d.name);

  const handleChange = (e) => {
    const query = e.target.value;
    setInputValue(query);

    if (query.length > 0) {
      const filtered = destinationNames.filter((name) =>
        name.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (destination) => {
    setInputValue(destination);
    setSuggestions([]);
    if (onSelect) onSelect(destination);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search destinations..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => handleSelect(name)}
              className="p-2 hover:bg-blue-100 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteSearchBar;
