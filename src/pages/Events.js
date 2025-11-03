import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();

  const events = [
    {
      title: t("events.cards.salsa.title"),
      date: t("events.cards.salsa.date"),
      desc: t("events.cards.salsa.desc"),
    },
    {
      title: t("events.cards.jazz.title"),
      date: t("events.cards.jazz.date"),
      desc: t("events.cards.jazz.desc"),
    },
    {
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
      {/* ✨ Gold background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* 🎆 Hero Banner */}
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=1600&q=80')",
            filter: "brightness(0.6) contrast(1.1)",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90"></div>

        {/* Text */}
        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            {t("events.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {t("events.hero.subtitle")}
          </p>
        </motion.div>
      </motion.section>

      {/* 🎉 Events Section */}
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
              key={i}
              className="p-8 bg-black/60 border border-yellow-700 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:bg-yellow-500 hover:text-black transition transform hover:scale-105"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{e.title}</h3>
              <p className="text-yellow-400 font-medium mb-2">{e.date}</p>
              <p className="text-gray-300">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✨ Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-yellow-600/10 to-transparent"></div>
    </motion.div>
  );
}
