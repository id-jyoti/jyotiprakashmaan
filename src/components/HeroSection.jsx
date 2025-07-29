import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500 opacity-30 blur-[120px] rounded-full z-[-1]" />

      {/* Animated Intro */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4"
      >
        Hey, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Your Name
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6"
      >
        I build smooth, high-performance web apps that blend design with
        engineering. Frontend-focused, user-obsessed.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        View My Work →
      </motion.a>
    </section>
  );
};

export default HeroSection;
