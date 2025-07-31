"use client";
import { StickyModel } from "@/components/Model";
import { useRef } from "react";

// import img from "@/public/img1.svg"
export default function Page() {
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Section 1 */}
      <section className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Section One</h1>
          <p className="text-xl">Full width and height section</p>
        </div>
      </section>

      {/* Section 2 - Sticky Scroll Container */}
      <div ref={stickyContainerRef} className="relative h-[500vh]">
        <section className="sticky top-0 w-full h-screen bg-[#e5e7eb] flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="absolute inset-0">
              <StickyModel containerRef={stickyContainerRef} />
            </div>
          </div>
        </section>
      </div>

      {/* Section 3 */}
      <section className="w-full h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Section Three</h1>
          <p className="text-xl">Final full width and height section</p>
        </div>
      </section>
    </div>
  );
}
