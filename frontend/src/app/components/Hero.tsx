"use client";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 w-full h-screen bg-black flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="w-auto text-center">
            <h1 className="text-6xl font-bold text-white">
              hello,{" "}
              <span className="bg-gradient-to-b from-indigo-600 to-cyan-400 text-transparent bg-clip-text">
                toño
              </span>{" "}
              here
            </h1>
            <p className="text-white/60 mt-3 text-center code-text">
              c.s. student @ tec, full-stack dev in progress :)
            </p>
            <div className="flex justify-center m-3">
              <AiOutlineGithub className="text-white/60 text-4xl mt-3" />
              <AiFillLinkedin className="text-white/60 text-4xl mt-3 ml-3" />
              <AiOutlineFile className="text-white/60 text-4xl mt-3 ml-3" />
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px 2px rgba(255, 255, 255, 0.3)",
                }}
                className="btn bg-white mt-[6px] ml-6 hover:bg-gradient-to-b from-indigo-600 to-cyan-400 transition duration-300 ease-in-out"
              >
                Contact me!
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
