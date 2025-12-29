import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getEventImages } from "../sanity/getImageByAlt";

export default function Events() {
  const { t } = useTranslation();
  const [images, setImages] = useState({});

  useEffect(() => {
    async function loadImages() {
      const imgs = await getEventImages();

      const map = {};
      imgs.forEach((img) => {
        map[img.alt] = img.url; // alt acts as the key
      });

      setImages(map);
    }

    loadImages();
  }, []);

  const events = [
    {
      key: "SalsaEvent",
      title: t("events.cards.salsa.title"),
      date: t("events.cards.salsa.date"),
      desc: t("events.cards.salsa.desc"),
    },
    {
      key: "JazzEvent",
      title: t("events.cards.jazz.title"),
      date: t("events.cards.jazz.date"),
      desc: t("events.cards.jazz.desc"),
    },
    {
      key: "HavanaEvent",
      title: t("events.cards.havana.title"),
      date: t("events.cards.havana.date"),
      desc: t("events.cards.havana.desc"),
    },
  ];

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
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-yellow-400 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {t("events.sectionTitle")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((e, i) => (
            <motion.div
              key={e.key}
              className="p-0 bg-black/60 border border-yellow-700 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.15)] overflow-hidden hover:bg-yellow-500 hover:text-black transition transform hover:scale-105"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* Image from Sanity */}
              {images[e.key] && (
                <img
                  src={images[e.key]}
                  alt={e.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{e.title}</h3>
                <p className="text-yellow-400 font-medium mb-2">{e.date}</p>
                <p className="text-gray-300">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-yellow-600/10 to-transparent"></div>
    </motion.div>
  );
}
