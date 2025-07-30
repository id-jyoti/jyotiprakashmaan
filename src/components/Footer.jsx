import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/id-jyoti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jyoti-prakash-maan-52690b106/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/jyotipmaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/jyotiprakashmaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/jyotiprakash.maan2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-700"
        >
          <FaFacebook />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Jyoti Prakash Maan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
