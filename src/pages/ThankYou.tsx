// src/pages/ThankYou.jsx or ThankYou.tsx

import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mb-6">
        Your message has been successfully sent. I'll get back to you as soon as possible.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default ThankYou;
