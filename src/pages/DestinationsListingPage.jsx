import { useState } from "react";
import regionsData from "../data/regions.json";
import DestinationCard from "../components/DestinationCard";

const seasons = ["All", "Spring", "Summer", "Autumn", "Winter"];
const categories = ["All", "Nature", "Temples", "Food", "Shopping"];
const popularityOptions = ["All", "Popular", "Hidden Gem"];

function DestinationsListingPage() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [seasonFilter, setSeasonFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [popularityFilter, setPopularityFilter] = useState("All");

  const toggleRegion = (regionName) => {
    setActiveRegion((prev) => (prev === regionName ? null : regionName));
  };

  const filterSpot = (spot) => {
    const seasonMatch =
      seasonFilter === "All" || spot.season?.includes(seasonFilter);
    const categoryMatch =
      categoryFilter === "All" || spot.category?.includes(categoryFilter);
    const popularityMatch =
      popularityFilter === "All" || spot.popularity === popularityFilter;

    return seasonMatch && categoryMatch && popularityMatch;
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Destinations by Region</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="p-2 border rounded"
          value={seasonFilter}
          onChange={(e) => setSeasonFilter(e.target.value)}
        >
          {seasons.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={popularityFilter}
          onChange={(e) => setPopularityFilter(e.target.value)}
        >
          {popularityOptions.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Region Listing */}
      {regionsData.map((region) => (
        <div key={region.region} className="mb-8">
          <button
            onClick={() => toggleRegion(region.region)}
            className="text-left w-full text-2xl font-semibold bg-gray-100 hover:bg-gray-200 p-4 rounded shadow transition"
          >
            {region.region}
          </button>

          {activeRegion === region.region && (
            <div className="mt-4 pl-4">
              {region.cities.map((city) => (
                <div key={city.name} className="mb-6">
                  <h3 className="text-xl font-medium mb-2">{city.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {city.spots
                      .filter(filterSpot)
                      .map((spot) => (
                        <DestinationCard
                          key={spot.id}
                          id={spot.id}
                          name={spot.name}
                          thumbnail={spot.thumbnail}
                          description={spot.description}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default DestinationsListingPage;
