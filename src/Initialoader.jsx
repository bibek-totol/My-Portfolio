


import React from "react";
import { motion } from "framer-motion";

const InitialLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center 
                 bg-gradient-to-br from-[#080325] via-[#1a0f91] to-[#0af70d] 
                 z-50"
    >
      {/* Spinner */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-20 h-20 border-4 border-white border-t-transparent rounded-full"
      />

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide text-center"
      >
        Loading your experience...
      </motion.h1>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "80%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="h-1 mt-6 bg-white/80 rounded-full overflow-hidden w-3/4 sm:w-1/2"
      />
    </motion.div>
  );
};

export default InitialLoader;

