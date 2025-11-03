import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.errors.name");
    if (!formData.email.trim()) newErrors.email = t("contact.errors.email");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("contact.errors.emailInvalid");
    if (!formData.message.trim()) newErrors.message = t("contact.errors.message");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: "", email: "", message: "" });
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
      {/* ✨ Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-black"></div>

      {/* 🪩 Hero Banner */}
      <motion.section
        className="relative h-[55vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589820296156-f06c5b2162a6?auto=format&fit=crop&w=1600&q=80')",
            filter: "brightness(0.65) contrast(1.05)",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90"></div>

        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            {t("contact.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {t("contact.hero.subtitle")}
          </p>
        </motion.div>
      </motion.section>

      {/* 📩 Contact Form Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          {t("contact.instructions")}
          <br />
          <span className="text-yellow-400 font-semibold">(702) 555-5555</span>{" "}
          {t("contact.orMessage")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-md mx-auto text-left"
        >
          {/* Name Field */}
          <motion.div
            animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact.form.name")}
              value={formData.name}
              onChange={handleChange}
              className={`p-3 w-full bg-zinc-900/80 border ${
                errors.name ? "border-red-500" : "border-yellow-700"
              } rounded-md focus:outline-none focus:border-yellow-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="email"
              name="email"
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              className={`p-3 w-full bg-zinc-900/80 border ${
                errors.email ? "border-red-500" : "border-yellow-700"
              } rounded-md focus:outline-none focus:border-yellow-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            animate={errors.message ? { x: [-5, 5, -5, 5, 0] } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              name="message"
              placeholder={t("contact.form.message")}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`p-3 w-full bg-zinc-900/80 border ${
                errors.message ? "border-red-500" : "border-yellow-700"
              } rounded-md focus:outline-none focus:border-yellow-500`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-3 rounded-full shadow-xl hover:scale-105 transform transition duration-300 w-full"
          >
            {t("contact.form.submit")}
          </button>
        </form>
      </div>

      {/* ✅ Toast Notification — Top Right */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50"
          >
            <motion.div
              className="absolute inset-0 blur-2xl bg-yellow-400/30 rounded-full w-64 h-10 -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <motion.div className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg">
              ✅ {t("contact.toast")}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
