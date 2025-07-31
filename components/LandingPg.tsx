"use client";
import { motion } from "motion/react";

export default function LandingPg() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-neutral-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
              backgroundSize: "400px 400px, 400px 400px, 40px 40px, 40px 40px",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 lg:px-12 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Side - Hero Typography */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-medium">
                      Deep Sea Innovation
                    </span>
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-200 text-xs">Live Project</span>
                  </div>
                </div>
              </div>

              {/* Main Headlines with Modern Typography */}
              <div className="space-y-2 mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    INNOVATION
                  </span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
                    SYSTEMS
                  </span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-indigo-200 via-blue-100 to-white bg-clip-text text-transparent">
                    INTELLIGENCE
                  </span>
                </h1>
              </div>

              {/* Enhanced Subtitle */}
              <div className="space-y-1">
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
                  Pioneering the future of underwater technology through
                  <span className="text-blue-300 font-medium">
                    {" "}
                    advanced AI systems
                  </span>{" "}
                  and
                  <span className="text-indigo-300 font-medium">
                    {" "}
                    sustainable energy solutions
                  </span>
                  .
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">
                      7,000m
                    </div>
                    <div className="text-xs text-white/60">Depth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-300">
                      24/7
                    </div>
                    <div className="text-xs text-white/60">Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold uppercase text-cyan-400/90">
                      Infinite
                    </div>
                    <div className="text-xs text-white/60">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Modern Content Card */}
          </div>
        </div>
      </main>

      {/* Modern Footer Elements */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent rounded-full"></div>
        <span className="text-sm text-white font-medium tracking-wider">
          DEEP TECH
        </span>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      {/* <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <span className="text-sm text-white font-medium">Explore</span>
        <div 
        onClick={() => alert("LOl")}
        className="group w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:border-white transition-all duration-300 cursor-pointer">
          <svg
            className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300"
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
      </div> */}

      {/* Seamless Transition Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-indigo-950 pointer-events-none"></div>
    </motion.div>
  );
}
