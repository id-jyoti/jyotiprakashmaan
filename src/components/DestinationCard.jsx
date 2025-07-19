import { Link } from "react-router-dom";

function DestinationCard({ id, name, thumbnail, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img src={thumbnail} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description.slice(0, 100)}...</p>
        <Link
          to={`/destinations/${id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          View more
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;
