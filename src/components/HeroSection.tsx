// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import bgImage from "../assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Background Overlay (optional tint) */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-40 z-[-1]" />

      {/* Floating background effect */}
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

      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 z-10"
      >
        Hey, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Jyoti Prakash Maan
        </span>
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 z-10"
      >
        A frontend developer with 6+ years of diverse experience — passionate about building smooth, accessible, and elegant web experiences that bring ideas to life.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 z-10"
      >
        <a
          href="#projects"
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          View My Work →
        </a>
        <a
          href="#contact"
          className="border-2 border-purple-500 text-purple-500 dark:text-purple-300 px-6 py-3 rounded-full hover:bg-purple-50 dark:hover:bg-purple-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
