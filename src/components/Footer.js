import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black border-t border-yellow-700 py-10 text-center text-gray-400 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="mb-3">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Azúcar</span> | Inspired by
          the heart of Cuba
        </p>
        <p className="text-xs text-gray-500">
          123 Havana Blvd, Las Vegas, NV 89109 • (702) 555-CUBA
        </p>
      </div>
    </motion.footer>
  );
}
