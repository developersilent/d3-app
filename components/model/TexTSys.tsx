"use client";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

interface TexrSysProps {
  scrollProgress: number;
}

export function TexTSys({ scrollProgress }: TexrSysProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Top Left Corner Text */}
      <div className="absolute top-12 left-12 max-w-md">
        <AnimatePresence mode="wait">
          {/* 0-30% */}
          {scrollProgress >= 0 && scrollProgress < 0.3 && (
            <motion.div
              key="text-1"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                  Phase 01 • Active
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 relative"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Deep Sea
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Mining Operations
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-teal-400/10 rounded-lg blur-xl"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-white/80 leading-relaxed font-light max-w-lg"
              >
                Advanced underwater extraction systems operating at extreme
                depths with precision engineering and autonomous control.
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 border border-blue-400/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-cyan-400/20 rounded-full animate-pulse"></div>
            </motion.div>
          )}

          {/* 30-60% */}
          {scrollProgress >= 0.3 && scrollProgress < 0.6 && (
            <motion.div
              key="text-2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* AI indicator */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm animate-pulse"></div>
                  </div>
                  <motion.div
                    className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
                  Phase 02 • AI Processing
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 relative"
              >
                <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
                  Autonomous
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Processing Units
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-rose-400/10 rounded-lg blur-xl"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-white/80 leading-relaxed font-light max-w-lg"
              >
                AI-powered refinement systems that process materials with
                unprecedented efficiency and machine learning optimization.
              </motion.p>

              {/* Tech elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border border-purple-400/20 rounded-lg rotate-45 animate-pulse"></div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 border border-pink-400/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )}

          {/* 60-90% */}
          {scrollProgress >= 0.6 && scrollProgress < 0.9 && (
            <motion.div
              key="text-3"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Eco indicator */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <motion.svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </div>
                  <motion.div
                    className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
                  Phase 03 • Eco-Friendly
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 relative"
              >
                <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                  Sustainable
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  Technology
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-green-400/10 rounded-lg blur-xl"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-white/80 leading-relaxed font-light max-w-lg"
              >
                Environmentally conscious extraction methods that minimize
                ecological impact while maximizing operational output.
              </motion.p>

              {/* Nature elements */}
              <div className="absolute -top-3 -right-3 w-14 h-14 border border-emerald-400/20 rounded-full animate-pulse"></div>
              <motion.div
                className="absolute -bottom-5 -left-5 w-8 h-8 border border-teal-400/20 rounded-lg rotate-12"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}

          {/* 90-100% */}
          {scrollProgress >= 0.9 && (
            <motion.div
              key="text-4"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Success indicator */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <motion.svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>
                  <motion.div
                    className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="px-4 py-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full backdrop-blur-sm"
                >
                  <span className="text-emerald-400 text-sm font-semibold tracking-wider">
                    DEPLOYMENT SUCCESSFUL
                  </span>
                </motion.div>
              </motion.div>

              {/* Enhanced title with gradient and glow */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 relative"
              >
                <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Mission
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                  className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative"
                >
                  Complete
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-lg blur-xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.span>
              </motion.h2>

              {/* Enhanced description with better typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-xl text-white/90 leading-relaxed font-light">
                  Successfully deployed and operational.
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-lg text-emerald-300/80 leading-relaxed"
                >
                  Ready for the next phase of deep ocean exploration.
                </motion.p>
              </motion.div>

              {/* Floating particles effect */}
              <div className="absolute -inset-10 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Right Corner Text */}
      <div className="absolute bottom-12 right-12 text-right max-w-xs">
        <AnimatePresence mode="wait">
          {/* 0-30% */}
          {scrollProgress >= 0 && scrollProgress < 0.3 && (
            <motion.div
              key="stat-1"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Depth indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="flex items-center justify-end gap-3 mb-4"
              >
                <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
                  Depth Analysis
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
                  <motion.svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl font-black mb-3 relative"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  7,000
                </span>
                <span className="text-white/90 text-2xl md:text-3xl ml-2">
                  Meters
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-lg blur-lg"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-white/70 leading-relaxed"
              >
                Operating depth below sea level
              </motion.p>

              {/* Decorative wave lines */}
              <div className="absolute -top-2 -left-8 w-16 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
              <div className="absolute -bottom-2 -left-6 w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse delay-1000"></div>
            </motion.div>
          )}

          {/* 30-60% */}
          {scrollProgress >= 0.3 && scrollProgress < 0.6 && (
            <motion.div
              key="stat-2"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Pressure indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="flex items-center justify-end gap-3 mb-4"
              >
                <span className="text-purple-400 text-xs font-semibold tracking-wider uppercase">
                  Pressure Monitor
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl font-black mb-3 relative"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  700
                </span>
                <span className="text-white/90 text-2xl md:text-3xl ml-2">
                  ATM
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-lg blur-lg"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-white/70 leading-relaxed"
              >
                Extreme pressure conditions
              </motion.p>

              {/* Pressure visualization */}
              <div className="absolute -top-1 -left-10 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-6 bg-gradient-to-t from-purple-400/20 to-purple-400/60 rounded-full"
                    animate={{ scaleY: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* 60-90% */}
          {scrollProgress >= 0.6 && scrollProgress < 0.9 && (
            <motion.div
              key="stat-3"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Temperature indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="flex items-center justify-end gap-3 mb-4"
              >
                <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                  Temperature
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                  <motion.svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l3-3 3 3v13a3 3 0 01-6 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl font-black mb-3 relative"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  2°C
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-lg blur-lg"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-white/70 leading-relaxed"
              >
                Near-freezing temperatures
              </motion.p>

              {/* Ice crystals effect */}
              <div className="absolute -top-3 -left-12 flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-400/40 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* 90-100% */}
          {scrollProgress >= 0.9 && (
            <motion.div
              key="stat-4"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Success indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="flex items-center justify-end gap-3 mb-4"
              >
                <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                  Performance
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                  <motion.svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl font-black mb-3 relative"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  98%
                </span>
                <span className="text-white/90 text-xl md:text-2xl ml-2">
                  Efficiency
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-lg blur-lg"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-emerald-300/80 leading-relaxed font-medium"
              >
                Optimal performance achieved
              </motion.p>

              {/* Success particles */}
              <div className="absolute -top-4 -left-16 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    style={{
                      left: `${i * 8}px`,
                      top: `${(i % 2) * 10}px`,
                    }}
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
