import { motion } from "framer-motion";
import profileImage from "/src/assets/profile1.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
      <motion.h2
        className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div className="md:w-2/3 text-gray-700 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            Hello, I'm <strong>Jyoti Prakash Maan</strong> — a passionate frontend developer who bridges aesthetics with performance.
            With over 6 years of hands-on experience, I thrive on crafting responsive, accessible, and visually compelling web interfaces
            using modern tech like React, TypeScript, and Tailwind CSS.
          </p>
          <p>
            I believe great user experiences come from attention to detail. Whether it's refining micro-interactions with Framer Motion or
            building design systems that scale, I care about clean code and elegant visuals.
          </p>
          <p>
            I’m not just someone who writes code — I’m a visual thinker and problem solver. I enjoy transforming abstract ideas into
            intuitive UI and meaningful design.
          </p>
          <p>
            Outside work, I find joy in artistic expression, exploring new ideas, and constantly leveling up my frontend craft. If there's
            one thing that truly keeps me going — it’s that “aha!” moment when design, interaction, and performance click perfectly.
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Jyoti Prakash Maan"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
