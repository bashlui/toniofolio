"use client";
import { motion } from "framer-motion";


export const Header = () => {

  const textContent = [
    "hola me llamo toño",
    "hello my name is toño",
    "hallo ich heiße toño",
    "こんにちは、わたしはとおのです",
    "नमस्ते, मेरा नाम टोन्य है",
  ];

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-4 bg-black text-white text-sm overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-10"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of text */}
          {textContent.map((text, index) => (
            <p key={`text-1-${index}`} className="text-white/60 hidden md:block text-lg">
              {text}
            </p>
          ))}
          
          {/* Second set of text */}
          {textContent.map((text, index) => (
            <p key={`text-2-${index}`} className="text-white/60 hidden md:block text-lg">
              {text}
            </p>
          ))}
          
          {/* Third set for seamless loop */}
          {textContent.map((text, index) => (
            <p key={`text-3-${index}`} className="text-white/60 hidden md:block text-lg">
              {text}
            </p>
          ))}
        </motion.div>
      </div>
    </header>
  );
};
