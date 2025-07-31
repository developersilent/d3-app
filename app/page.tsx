"use client";
import LandingPg from "@/components/LandingPg";
import { StickyModel } from "@/components/model/Model";
import Section3 from "@/components/Section3";
import { useRef } from "react";

export default function Page() {
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const exploreButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Landing Page Section */}
      <LandingPg />

      {/* Section 2 - Sticky Scroll Container with Smooth Transition */}
      <div
        ref={stickyContainerRef}
        className="relative h-[300vh]"
      >
        <section className="sticky top-0 w-full h-screen bg-gradient-to-b from-indigo-950 via-neutral-900 to-slate-900 flex items-center justify-center">
          <div className="w-full h-full relative z-50">
            <div className="absolute inset-0">
              <StickyModel containerRef={stickyContainerRef} />
            </div>
          </div>
        </section>
      </div>

      {/* Section 3 - Modern Product Showcase */}
      <Section3 />
    </div>
  );
}
