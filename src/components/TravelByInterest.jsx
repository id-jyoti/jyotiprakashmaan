import interests from "../data/interests.json";

function TravelByInterest() {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Travel by Interest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={interest.image}
                alt={interest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelByInterest;
