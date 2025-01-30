"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";


const logos = [
  { component: FaReact, color: "#FFFFFF" },
  { component: SiTypescript, color: "#FFFFFF" },
  { component: FaPython, color: "#FFFFFF" },
  { component: FaNodeJs, color: "#FFFFFF" },
  { component: RiTailwindCssFill, color: "#FFFFFF" },
  { component: FaGolang, color: "#FFFFFF" },
  { component: SiPostgresql, color: "#FFFFFF" },
  { component: SiExpress, color: "#FFFFFF" },
];

export const Skills = () => {
  return (
    <section className="pt-20 pb-20 w-full h-[100vh] bg-black">
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
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-5 md:grid-cols-4 gap-14">
            {logos.map(({ component: Icon, color }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.3,
                }}
                className="flex justify-center items-center"
              >
                <Icon
                  size={70}
                  style={{ color }}
                  className=""
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
