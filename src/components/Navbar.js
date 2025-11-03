import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // 🌍 Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem("azucar-lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // 🪄 Save language when changed
  useEffect(() => {
    localStorage.setItem("azucar-lang", i18n.language);
  }, [i18n.language]);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location]);

  // Toggle between EN and ES
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("azucar-lang", newLang);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 shadow-lg backdrop-blur-md border-b border-yellow-600/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-400 tracking-wide hover:text-yellow-300 transition duration-300"
        >
          Azúcar
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <Link
            to="/"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/menu"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            {t("nav.menu")}
          </Link>
          <Link
            to="/events"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            {t("nav.events")}
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:text-yellow-400 transition duration-300"
          >
            {t("nav.contact")}
          </Link>

          {/* 🌐 LANGUAGE TOGGLE */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.9 }}
            className="ml-6 border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-yellow-400 hover:text-black transition"
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 text-center py-8 space-y-6 shadow-inner border-t border-yellow-600/20"
          >
            <Link
              to="/"
              className="block text-gray-200 hover:text-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className="block text-gray-200 hover:text-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/menu"
              className="block text-gray-200 hover:text-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.menu")}
            </Link>
            <Link
              to="/events"
              className="block text-gray-200 hover:text-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.events")}
            </Link>
            <Link
              to="/contact"
              className="block text-gray-200 hover:text-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            {/* 🌐 LANGUAGE TOGGLE (MOBILE) */}
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full text-sm shadow-md transition"
            >
              {i18n.language === "en" ? "Español" : "English"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
