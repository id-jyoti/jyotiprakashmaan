import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import SearchBar from "../components/SearchBar";
import destinations from "../data/destinations.json";

function Destinations() {
  const [filtered, setFiltered] = useState(destinations);

  const handleSearch = (query) => {
    const result = destinations.filter((d) =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filtered.map((dest) => (
          <DestinationCard
            key={dest.id}
            id={dest.id}
            name={dest.name}
            thumbnail={dest.thumbnail}
            description={dest.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Destinations;
