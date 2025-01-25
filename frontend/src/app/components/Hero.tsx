export const Hero = () => {
  return (
    <section className="pt-8 pb-20 w-full h-full bg-black"> 
      <div className="container">
        <div className="flex justify-center">
            <div className="w-1/2">
                <h1 className="text-6xl font-bold text-white">
                Welcome to <span className="text-purple-500">Dev</span>Jobs
                </h1>
                <p className="text-white/60 mt-3">
                Find your dream job in the tech industry.
                </p>
                <button className="btn btn-purple mt-4">Get Started</button>
            </div>
        </div>
      </div>
    </section>
  );
};
