"use client";
import { motion } from "motion/react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function CTASection() {
  return (
    <motion.div className="text-center mt-24" variants={fadeInVariants}>
      <motion.div
        className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        variants={fadeInVariants}
      >
        <motion.a
        href="https://pitch-a-thon-app.vercel.app/"
        target="_blank"
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white rounded-2xl font-semibold text-base shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center gap-2">
            <span>Explore Platform</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </motion.a>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center items-center gap-8 text-xs text-slate-500"
        variants={fadeInVariants}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>SOC 2 Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>Enterprise Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span>24/7 Support</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
