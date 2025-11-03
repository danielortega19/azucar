import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionOverlay({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            fixed inset-0 
            bg-gradient-to-b 
            from-amber-800/80 via-yellow-600/50 to-black/80 
            backdrop-blur-[1px]
            z-[999]
            pointer-events-none
            overflow-hidden
          "
        >
          {/* ✨ Pulsing drumbeat circle */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{
              scale: [0.9, 1.05, 0.95, 1],
              opacity: [0.4, 0.7, 0.4, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute top-1/2 left-1/2 
              w-[120vw] h-[120vw]
              -translate-x-1/2 -translate-y-1/2
              rounded-full 
              bg-[radial-gradient(circle,rgba(255,215,128,0.25)_0%,transparent_70%)]
              blur-3xl
            "
          />

          {/* 🔥 Soft shimmering texture overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_50%_40%,rgba(255,200,100,0.1),transparent_70%)]
              mix-blend-screen
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
