import { useState } from "react";

function TripPlannerPage() {
  const [plan, setPlan] = useState(["", "", "", "", "", "", ""]);

  const handleChange = (dayIndex, value) => {
    const newPlan = [...plan];
    newPlan[dayIndex] = value;
    setPlan(newPlan);
    localStorage.setItem("tripPlan", JSON.stringify(newPlan));
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Trip Planner</h1>
      <p className="mb-4 text-gray-600">Add one destination per day (3–7 days).</p>
      <div className="space-y-4">
        {plan.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            <label className="w-20 font-medium">Day {index + 1}:</label>
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default TripPlannerPage;
