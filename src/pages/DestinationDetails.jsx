import { useParams } from "react-router-dom";
import destinations from "../data/destinations.json";

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) return <p className="text-center mt-10">Destination not found</p>;

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>

      <img
        src={destination.thumbnail}
        alt={destination.name}
        className="w-full max-h-96 object-cover rounded mb-6"
      />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{destination.description}</p>
        {destination.bestTimeToVisit && (
          <p className="text-gray-600 mt-2">
            <strong>Best time to visit:</strong> {destination.bestTimeToVisit}
          </p>
        )}
        {destination.weather && (
          <p className="text-gray-600 mt-1">
            <strong>Weather:</strong> {destination.weather}
          </p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Top Attractions</h2>
        {destination.attractions?.length ? (
          <ul className="list-disc ml-6 text-gray-700">
            {destination.attractions.map((attraction, i) => (
              <li key={i}>{attraction}</li>
            ))}
          </ul>
        ) : (
          <p>No attractions listed.</p>
        )}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Get There</h2>
        <p className="text-gray-700">{destination.access}</p>
      </section>

      {destination.localFoods?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Local Foods</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {destination.localFoods.map((food, i) => (
              <li key={i}>{food}</li>
            ))}
          </ul>
        </section>
      )}

      {destination.gallery?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {destination.gallery.map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`${destination.name} gallery ${i + 1}`}
                className="rounded object-cover h-32 w-full"
              />
            ))}
          </div>
        </section>
      )}

      {destination.travelTips?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Travel Tips</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {destination.travelTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default DestinationDetails;
