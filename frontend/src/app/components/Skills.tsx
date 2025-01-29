"use client";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section className="pt-20 pb-20 w-full h-[75vh] bg-black">
      <div className="container mx-auto px-4">
        <div className="w-auto text-center">
          <h1 className="title-text text-[#f5f5f5]">
            you better have{" "}
            <span className="bg-gradient-to-b from-indigo-600 to-cyan-400 text-transparent bg-clip-text">
              {" "}
              skills...{" "}
            </span>{" "}
            do you?
          </h1>
          <motion.h1
            animate={{
              backgroundPositionX: "100%",
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="tag bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
          >
            of course!{" "}
          </motion.h1>
        </div>
        <div className="container mx-auto p-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* left column */}
            <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
              <p className="text-lg text-gray-400 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quae praesentium cum similique, hic quidem ex nulla blanditiis
                officiis? Itaque voluptas quos consequuntur officia veritatis
                quam, facilis assumenda earum vel.
              </p>
            </div>

            {/* right column */}
            <div className="w-full lg:w-1/3 text-center lg:text-right lg:pl-12">
              <p className="text-lg text-gray-400 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quae praesentium cum similique, hic quidem ex nulla blanditiis
                officiis? Itaque voluptas quos consequuntur officia veritatis
                quam, facilis assumenda earum vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
