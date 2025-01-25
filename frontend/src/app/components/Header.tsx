export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Productive. Creative. Passionate.
        </p>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
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
