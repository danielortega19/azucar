import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getEventImages } from "../sanity/getImageByAlt";

export default function Patio() {
  const { t } = useTranslation();
  const [heroImage, setHeroImage] = useState(null);
  const [images, setImages] = useState({});

  const patioSections = [
    {
      key: "CubaLibre",
      title: t("patio.cards.sunset.title"),
      subtitle: t("patio.cards.sunset.subtitle"),
      desc: t("patio.cards.sunset.desc"),
    },
    {
      key: "DrumSet",
      title: t("patio.cards.music.title"),
      subtitle: t("patio.cards.music.subtitle"),
      desc: t("patio.cards.music.desc"),
    },
    {
      key: "DancingPatio",
      title: t("patio.cards.nights.title"),
      subtitle: t("patio.cards.nights.subtitle"),
      desc: t("patio.cards.nights.desc"),
    },
    {
      key: "PatioHavana",
      title: t("patio.cards.cigar.title"),
      subtitle: t("patio.cards.cigar.subtitle"),
      desc: t("patio.cards.cigar.desc"),
    },
  ];

  useEffect(() => {
    async function loadImages() {
      const sectionResults = await Promise.all(
        patioSections.map((section) => getEventImages(section.key))
      );

      const map = {};
      sectionResults.forEach((imgArray) => {
        imgArray.forEach((i) => {
          // store by alt/key so we can access via section.key later
          map[i.alt] = i.url;
        });
      });

      if (map.PatioCalle8) {
        setHeroImage(map.PatioCalle8);
      }

      setImages(map);
    }

    loadImages();
  }, []); // patioSections is static enough for now

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative text-gray-100 font-['Poppins'] min-h-[calc(100vh-4rem)] overflow-hidden pt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 100%)",
      }}
    >
      {/* ✨ background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* HERO INFO SECTION */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
              {t("patio.hero.title")}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("patio.hero.text")}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t("patio.hero.subtext")}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {heroImage && (
              <img
                src={heroImage}
                alt={t("patio.hero.imageAlt")}
                className="w-full max-w-md rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.25)] object-cover"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* EXPERIENCES CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {t("patio.sectionTitle")}
        </motion.h2>

        {/* 2 cards per row on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {patioSections.map((section, index) => (
            <motion.div
              key={section.key}
              className="
        w-full 
        max-w-[420px]      /* smaller + more elegant */
        bg-black/60 
        border border-yellow-700 
        rounded-2xl 
        shadow-[0_0_18px_rgba(255,215,0,0.18)]
        overflow-hidden 
        hover:bg-yellow-500 
        hover:text-black 
        transition 
        transform 
        hover:scale-105
      "
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* 🖼 Image from Sanity */}
              {images[section.key] && (
                <img
                  src={images[section.key]}
                  alt={section.title}
                  className="w-full aspect-square object-cover rounded-t-2xl"
                />
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-yellow-900 font-semibold mb-1">
                    {section.subtitle}
                  </p>
                )}
                <p className="text-gray-200 text-sm">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-yellow-600/10 to-transparent"></div>
    </motion.div>
  );
}
