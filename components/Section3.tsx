"use client";
import { motion } from "motion/react";
import HeroSection from "./section3/HeroSection";
import IntegrationCard from "./section3/IntegrationCard";
import AnalyticsCard from "./section3/AnalyticsCard";
import CTASection from "./section3/CTASection";
import BackgroundElements from "./section3/BackgroundElements";

export default function Section3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-neutral-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background System */}
      <BackgroundElements />

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <HeroSection />

          {/* Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
            variants={containerVariants}
          >
            <IntegrationCard />
            <AnalyticsCard />
          </motion.div>

          {/* CTA Section */}
          <CTASection />
        </div>
      </div>

      {/* Seamless Transition Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-indigo-950 pointer-events-none"></div>
    </motion.section>
  );
}
