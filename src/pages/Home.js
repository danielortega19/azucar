import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { getEventImages } from "../sanity/getImageByAlt";

export default function Home() {
  const { t } = useTranslation();
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    async function loadHeroImage() {
      const img = await getEventImages("CeliaCruzHomePage");
      if (img && img.url) {
        setHeroImage(img.url);
      }
    }
    loadHeroImage();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative text-gray-100 font-['Poppins'] min-h-[100vh] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 100%)",
      }}
    >
      {/* Decorative gold glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col justify-center pt-24">
        {/* HERO SECTION – now gets image from Sanity */}
        <HeroSection heroImage={heroImage} />

        {/* MISSION SECTION */}
        <motion.section
          id="mission-section"
          className="max-w-5xl mx-auto py-32 px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            {t("mission.title")}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("mission.text")}
          </p>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <section className="py-32 px-6">
          <motion.h2
            className="text-4xl font-bold text-yellow-400 text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            {t("experience.title")}
          </motion.h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            {/* 🍹 CARD 1 - MENU */}
            <Link to="/menu">
              <motion.div
                className="p-8 rounded-xl border border-yellow-700 bg-black/60 shadow-md hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {t("experience.card1Title")}
                </h3>
                <p className="text-gray-300">{t("experience.card1Text")}</p>
              </motion.div>
            </Link>

            {/* 🎶 CARD 2 - EVENTS */}
            <Link to="/events">
              <motion.div
                className="p-8 rounded-xl border border-yellow-700 bg-black/60 shadow-md hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {t("experience.card2Title")}
                </h3>
                <p className="text-gray-300">{t("experience.card2Text")}</p>
              </motion.div>
            </Link>

            {/* 💨 CARD 3 - Patio */}
            <Link to="/patio">
              <motion.div
                className="p-8 rounded-xl border border-yellow-700 bg-black/60 shadow-md hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {t("experience.card3Title")}
                </h3>
                <p className="text-gray-300">{t("experience.card3Text")}</p>
              </motion.div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
