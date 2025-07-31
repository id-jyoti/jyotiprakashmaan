import { motion } from "framer-motion";
import bgImage from "../assets/bg2.jpeg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-start px-8 pt-20 text-left relative overflow-hidden bg-cover bg-center font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent dark:from-black/70 dark:via-black/30 backdrop-blur-md z-[-1]" />

      {/* Floating effect */}
      <motion.div
        className="absolute inset-0 z-[-2]"
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="max-w-2xl p-6 bg-white/60 dark:bg-black/40 rounded-xl backdrop-blur-lg shadow-xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          Hey, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Jyoti Prakash Maan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-6 leading-relaxed"
        >
          A frontend developer with diverse experience passionate about building smooth, accessible,
          and elegant web experiences that bring ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#about"
            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            About Me →
          </a>
          <a
            href="#contact"
            className="border-2 border-indigo-500 text-indigo-600 dark:text-indigo-300 px-6 py-3 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
