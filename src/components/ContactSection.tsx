import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-3xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        I’m currently open to freelance or full-time opportunities. Feel free to reach out if you think we can work together!
      </motion.p>

      <motion.a
        href="mailto:youremail@example.com"
        className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Say Hello 👋
      </motion.a>
    </section>
  );
}
