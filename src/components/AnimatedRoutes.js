import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransitionOverlay from "./PageTransitionOverlay";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Patio from "../pages/Patio";

export default function AnimatedRoutes() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const transitionProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <>
      <PageTransitionOverlay isVisible={showOverlay} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...transitionProps}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div {...transitionProps}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/menu"
            element={
              <motion.div {...transitionProps}>
                <Menu />
              </motion.div>
            }
          />
          <Route
            path="/events"
            element={
              <motion.div {...transitionProps}>
                <Events />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...transitionProps}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/patio"
            element={
              <motion.div {...transitionProps}>
                <Patio />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
