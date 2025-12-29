import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import AzucarPhoto from "../assets/images/AzucarHomePage.png";

export default function HeroSection({ heroImage }) {
  const [fadeArrow, setFadeArrow] = useState(1);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fade = Math.max(1 - scrollY / 120, 0);
      setFadeArrow(fade);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      scale: 1.1,
      transition: { duration: 10, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background image with zoom-in */}
      <motion.div
        initial={{ scale: 1 }}
        animate={controls}
        className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${heroImage || AzucarPhoto})`,
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Text */}
      <motion.div
        className="relative z-10 mx-auto w-[90%] sm:w-[80%] md:max-w-3xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 leading-tight drop-shadow-lg">
          {t("hero.title")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 sm:px-10 py-3 rounded-full shadow-xl hover:scale-105 transform transition duration-300">
          {t("hero.button")}
        </button>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() =>
          document
            .querySelector("#mission-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-yellow-400 hover:text-yellow-300 transition"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ opacity: fadeArrow }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </section>
  );
}
