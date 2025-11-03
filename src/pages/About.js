import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative text-gray-100 font-['Poppins'] min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden pt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 100%)",
      }}
    >
      {/* ✨ Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* 🔥 Split Layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-20 gap-12">
        {/* LEFT — TEXT CONTENT */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wide">
            {t("about.title")}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            {t("about.paragraph1")}
            <span className="text-yellow-400 font-semibold"> Azúcar</span>
            {t("about.paragraph1b")}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {t("about.paragraph3")}
          </p>
        </motion.div>

        {/* RIGHT — IMAGE WITH ANIMATION */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,215,0,0.2)]">
            <motion.img
              src="https://www.mullanlighting.com/media/blog/cafe-cuba-mullan-lighting.jpg"
              alt={t("about.imageAlt")}
              className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.3)] mx-auto mb-10 w-full md:w-3/4 object-cover"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255,215,0,0.4)" }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
