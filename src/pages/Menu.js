import React from "react";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();

  const drinks = [
    {
      name: t("menu.drinks.mojito.name"),
      description: t("menu.drinks.mojito.desc"),
      price: 14,
      image:
        "https://i.blogs.es/a21ce1/mojito-cocktail-wooden-table/1024_2000.jpg?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: t("menu.drinks.espresso.name"),
      description: t("menu.drinks.espresso.desc"),
      price: 16,
      image:
        "https://coctelia.com/wp-content/uploads/2019/07/espresso-martini-1024x768.jpg?pid=Api&P=0&h=180?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: t("menu.drinks.mule.name"),
      description: t("menu.drinks.mule.desc"),
      price: 15,
      image:
        "https://1.bp.blogspot.com/-51qbDUUzpR0/VeRpb72G1vI/AAAAAAAAY_Q/Vp9igfaLHQs/s1600/tequila-cocktails.jpg",
    },
    {
      name: t("menu.drinks.guava.name"),
      description: t("menu.drinks.guava.desc"),
      price: 14,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.piI6_ZB3QPTm3ktOo3zCmgHaHa?pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="bg-black text-gray-100 font-['Poppins'] min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* ✨ Gold glow overlay (same as Home/About) */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      <motion.h1
        className="text-5xl font-bold text-yellow-400 text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("menu.title")}
      </motion.h1>

      {/* Menu Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {drinks.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
