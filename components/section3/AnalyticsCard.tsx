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

export default function AnalyticsCard() {
  return (
    <motion.div
      className="group cursor-pointer"
      variants={fadeInVariants}
    >
      <div className="relative h-full perspective-1000">
        {/* Card with advanced materials */}
        <div className="relative h-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-3xl border border-slate-700/40 rounded-3xl overflow-hidden shadow-2xl group-hover:border-cyan-400/60 group-hover:shadow-cyan-500/10 transition-all duration-500">

          {/* Content with advanced spacing */}
          <div className="relative p-8 lg:p-10">
            {/* Icon with sophisticated design */}
            <div className="mb-8 relative">
              <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/15 via-teal-500/10 to-emerald-600/15 rounded-2xl border border-cyan-400/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-2xl blur-sm"></div>
                <svg
                  className="relative w-8 h-8 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Orbital elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-ping delay-1000"></div>
            </div>

            {/* Enhanced badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 rounded-full text-cyan-200 text-xs font-medium backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                Analytics Engine
              </span>
            </div>

            {/* Typography with better hierarchy */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors duration-300 leading-tight">
              Predictive Analytics
              <span className="block text-lg font-normal text-slate-400 mt-1">
                & Intelligence
              </span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
              Advanced AI-driven insights with real-time monitoring and
              predictive modeling for optimal performance.
            </p>

            {/* Advanced feature grid */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
                <span>Real-time Fleet Monitoring</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <span>Performance Optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                <div className="w-6 h-6 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
                <span>AI-Powered Predictions</span>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-emerald-500/0"></div>
        </div>
      </div>
    </motion.div>
  );
}
