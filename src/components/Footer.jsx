function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Japan Travel Guide</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <button className="bg-gray-700 px-2 py-1 rounded">EN</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
