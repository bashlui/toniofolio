export const Hero = () => {
  return (
    <section className="pt-8 pb-20 w-full h-full bg-black"> 
      <div className="container">
        <div className="flex justify-center">
            <div className="w-auto">
                <h1 className="text-6xl font-bold text-white">
                Hello! <span className="text-yellow-600">Antonio, </span>here
                </h1>
                <p className="text-white/60 mt-3">
                Find your dream job in the tech industry.
                </p>
                <button className="btn btn-purple mt-4 text-white">Get Started</button>
            </div>
        </div>
      </div>
    </section>
  );
};
