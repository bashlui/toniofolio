"use client";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-4 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block text-lg">
          ¡Hola! Bienvenidx
        </p>
        <p className="text-white/60 hidden md:block text-lg">Hello! Welcome</p>
        <p className="text-white/60 hidden md:block text-lg">
          Hallo! Wircommen
        </p>
        <p className="text-white/60 hidden md:block text-lg">
          こんにちは、ようこそ
        </p>
        <p className="text-white/60 hidden md:block text-lg">
          नमस्ते, स्वागत है
        </p>
      </div>
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
