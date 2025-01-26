export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5 bg-black">
        <div className="container">
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex gap-6 text-white items-center">
              <a href="#" className="hover:text-black">
                Home
              </a>
              <a href="#" className="hover:text-black">
                About
              </a>
              <a href="#" className="hover:text-black">
                Projects
              </a>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
