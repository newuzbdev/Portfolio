"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/aurora-background";

const Hero = () => {
  return (
    <div className="bg-black">
      <AuroraBackground className="from-purple-900/20 to-pink-900/20">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 py-2">
            Ochilov Jaxongirmirzo
          </div>
          <div className="font-extralight text-base md:text-4xl text-gray-300 py-4">
            Frontend Developer
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit text-white px-6 py-2.5 font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Bog&apos;lanish
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
