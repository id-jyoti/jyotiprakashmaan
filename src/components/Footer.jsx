export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p>
        © {year} • Built with ❤️ using React, Vite, TypeScript, Tailwind & Framer Motion
      </p>
    </footer>
  );
}
