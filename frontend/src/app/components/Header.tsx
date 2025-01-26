export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5 bg-black">
        <div className="container">
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex gap-6 text-white items-center">
              <a href="#" className="hover:text-white/60">
                Home
              </a>
              <a href="#" className="hover:text-white/60">
                About
              </a>
              <a href="#" className="hover:text-white/60">
                Projects
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
