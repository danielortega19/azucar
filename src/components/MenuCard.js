import React from "react";
import { motion } from "framer-motion";

export default function MenuCard({ name, description, price, image }) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg border border-yellow-700 bg-black/70 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(0.55)",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-10 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-3 drop-shadow-md">
          {name}
        </h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <p className="text-yellow-400 font-semibold text-lg">${price}</p>
      </div>
    </motion.div>
  );
}
