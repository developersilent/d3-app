"use client";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  icon: React.ReactNode;
  features: Array<{
    text: string;
    color: string;
  }>;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

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

export default function FeatureCard({
  title,
  subtitle,
  description,
  badgeText,
  icon,
  features,
  colorScheme,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      variants={fadeInVariants}
    >
      <div className="relative h-full perspective-1000">
       
        {/* Card with advanced materials */}
        <div className="relative h-full rounded-3xl overflow-hidden">
          {/* Animated border system */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div
              className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${colorScheme.primary}/80 to-transparent`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${colorScheme.accent}/60 to-transparent`}
            ></div>
          </div>

          {/* Content with advanced spacing */}
          <div className="relative p-8 lg:p-10">
            {/* Icon with sophisticated design */}
            <div className="mb-8 relative">
              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${colorScheme.primary}/15 via-${colorScheme.secondary}/10 to-${colorScheme.accent}/15 rounded-2xl border border-${colorScheme.primary}/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorScheme.primary}/10 to-${colorScheme.accent}/10 rounded-2xl blur-sm`}
                ></div>
                <div className="relative">{icon}</div>
              </div>

              {/* Orbital elements */}
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 bg-${colorScheme.primary}/60 rounded-full animate-pulse`}
              ></div>
              <div
                className={`absolute -bottom-2 -left-2 w-2 h-2 bg-${colorScheme.accent}/40 rounded-full animate-pulse delay-700`}
              ></div>
              <div
                className={`absolute top-1/2 -right-3 w-1.5 h-1.5 bg-${colorScheme.secondary}/50 rounded-full animate-ping delay-1000`}
              ></div>
            </div>

            {/* Enhanced badge */}
            <div className="mb-6">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${
                  colorScheme.primary
                }/10 to-${colorScheme.accent}/10 border border-${
                  colorScheme.primary
                }/20 rounded-full text-${
                  colorScheme.primary.split("-")[0]
                }-200 text-xs font-medium backdrop-blur-sm`}
              >
                <div
                  className={`w-1.5 h-1.5 bg-${colorScheme.primary} rounded-full animate-pulse`}
                ></div>
                {badgeText}
              </span>
            </div>

            {/* Typography with better hierarchy */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors duration-300 leading-tight">
              {title}
              <span className="block text-lg font-normal text-slate-400 mt-1">
                {subtitle}
              </span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
              {description}
            </p>

            {/* Advanced feature grid */}
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                >
                  <div
                    className={`w-6 h-6 bg-${feature.color}/10 rounded-lg flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 bg-${feature.color} rounded-full`}
                    ></div>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom accent */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.primary}/0 via-${colorScheme.primary}/50 to-${colorScheme.accent}/0`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
