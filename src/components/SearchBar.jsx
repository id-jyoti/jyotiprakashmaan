import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-4 shadow rounded-md">
      <input
        type="text"
        placeholder="Search destination..."
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
