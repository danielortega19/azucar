import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getEventImages } from "../sanity/getImageByAlt";

export default function Menu() {
  const { t } = useTranslation();
  const [images, setImages] = useState({});

  useEffect(() => {
    async function loadImages() {
      const imgs = await getEventImages();
      const map = {};
      imgs.forEach((img) => (map[img.alt] = img.url));
      setImages(map);
    }
    loadImages();
  }, []);

  const drinks = [
    {
      key: "Mojito",
      name: t("menu.drinks.mojito.name"),
      description: t("menu.drinks.mojito.desc"),
      price: 14,
      image: images["Mojito"],
    },
    {
      key: "Expresso",
      name: t("menu.drinks.espresso.name"),
      description: t("menu.drinks.espresso.desc"),
      price: 16,
      image: images["Expresso"],
    },
    {
      key: "CubanMule",
      name: t("menu.drinks.mule.name"),
      description: t("menu.drinks.mule.desc"),
      price: 15,
      image: images["CubanMule"],
    },
    {
      key: "Guava",
      name: t("menu.drinks.guava.name"),
      description: t("menu.drinks.guava.desc"),
      price: 14,
      image: images["Guava"],
    },
  ];

  return (
    <div className="bg-black text-gray-100 font-['Poppins'] min-h-screen pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* 🍹 Menu Intro Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mb-16">
        <motion.h1
          className="text-5xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("menu.intro.heading")}
        </motion.h1>

        <motion.p
          className="text-gray-300 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {t("menu.intro.text1")}
        </motion.p>

        <motion.p
          className="text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t("menu.intro.text2")}
        </motion.p>
      </div>

      {/* 🥂 Menu Grid */}
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {t("menu.title")}
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {drinks.map((item) => (
          <MenuCard
            key={item.key}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
