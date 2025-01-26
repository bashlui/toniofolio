export const Hero = () => {
  return (
    <section className="pt-8 pb-20 w-full h-full bg-black">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-auto">
            <h1 className="text-6xl font-bold text-white">
              hello, <span className="bg-gradient-to-b from-indigo-600 to-cyan-400 text-transparent bg-clip-text">toño</span> here
            </h1>
            <p className="text-white/60 mt-3 text-center code-text">
              c.s. student @ tec, full-stack dev in progress :)
            </p>
            <button className="btn btn-purple mt-4 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
