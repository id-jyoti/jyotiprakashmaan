import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Travel App",
    description: "A single-page React app with dynamic search, filters, and detailed destination pages.",
    link: "https://yourprojecturl.com",
  },
  {
    title: "Portfolio",
    description: "This website you're seeing right now. Built with Vite + React + Tailwind + TypeScript.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
