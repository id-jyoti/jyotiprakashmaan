import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaQuora,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/id-jyoti"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black dark:text-white hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jyoti-prakash-maan-52690b106/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/jyotipmaan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-blue-400 hover:scale-110 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/jyotiprakashmaan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-pink-500 hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/jyotiprakash.maan2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-700 hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.quora.com/profile/Jyoti-Prakash-Maan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quora"
          className="text-red-600 hover:scale-110 transition-transform"
        >
          <FaQuora />
        </a>
        <a
          href="https://youtube.com/playlist?list=PLfNot5_yarU3GYfUxTbjnOzlAOGvzWlsQ&si=MusCMQcizzUAEis-"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube Playlist"
          className="text-red-500 hover:scale-110 transition-transform"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Jyoti Prakash Maan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
