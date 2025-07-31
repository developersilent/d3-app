"use client";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useSpring } from "motion/react";

// Animated GLB Component synchronized with Motion scroll
function Model({ scrollProgress, ...props }: any) {
  const { scene, animations } = useGLTF("/lol.glb");
  const { actions, clips } = useAnimations(animations, scene);

  // Initialize actions on mount
  useEffect(() => {
    console.log("Available actions:", Object.keys(actions));
    console.log("Available clips:", clips);

    // Initialize all actions - improved approach
    Object.values(actions).forEach((action: any) => {
      if (action) {
        action.reset();
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.enabled = true;
        action.play();
        action.paused = true; // Start paused for scroll control
        console.log("Action initialized:", action.getClip().name);
      }
    });
  }, [actions, clips]);

  // Remove platform and setup materials for fade effect
  useEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        // Remove platform/ground objects
        if (
          child.name &&
          (child.name.toLowerCase().includes("platform") ||
            child.name.toLowerCase().includes("ground") ||
            child.name.toLowerCase().includes("floor") ||
            child.name.toLowerCase().includes("base") ||
            child.name.toLowerCase().includes("terrain"))
        ) {
          child.visible = false;
        }

        // Setup materials for fade effect
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  // useFrame for smooth 60fps animation control synchronized with Motion scroll
  useFrame(() => {
    // Use scrollProgress prop from Motion (0 to 1)
    const scrollOffset = scrollProgress || 0;

    console.log(
      "Scroll offset:",
      scrollOffset,
      "Actions count:",
      Object.keys(actions).length
    );

    // Control animation based on Motion scroll progress - SYNCHRONIZED
    Object.values(actions).forEach((action: any) => {
      if (action) {
        const duration = action.getClip().duration;
        // Direct mapping: scroll progress controls animation time
        action.time = scrollOffset * duration;
        console.log("Setting action time:", action.time, "Duration:", duration);
      }
    });
  });

  return <primitive object={scene} {...props} />;
}

// Simple Canvas with Motion scroll integration
export function MainModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion scroll hooks for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Add smooth spring animation to scroll progress
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Subscribe to smooth scroll progress changes
    const unsubscribe = smoothScrollProgress.on("change", (latest) => {
      const clampedProgress = Math.min(Math.max(latest, 0), 1);
      setScrollProgress(clampedProgress);
      console.log("Scroll progress:", clampedProgress);
    });

    return unsubscribe;
  }, [smoothScrollProgress]);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Canvas Container */}
      <div className="w-full h-full z-10">
        <Canvas
          camera={{ position: [0, 3, 11], fov: 50 }}
          style={{
            pointerEvents: "none",
            touchAction: "none",
            userSelect: "none",
            outline: "none",
          }}
          tabIndex={-1}
        >
          {/* Enhanced lighting setup */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={1.5} />
          <pointLight position={[0, 10, 0]} intensity={1} />
          <hemisphereLight
            color="#ffffff"
            groundColor="#444444"
            intensity={0.8}
          />

          <Suspense fallback={null}>
            <Model
              scrollProgress={scrollProgress}
              position={[0, -0.3, 0]}
              rotation={[0, Math.PI, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Scrollable Content - Creates scroll space */}
      <div className="relative z-20 pointer-events-none">
        <div className="h-[500vh]" />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-4 left-4 z-30 text-white bg-black/50 px-3 py-1 rounded">
        Scroll: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}

// Sticky Section Compatible Model - for use in sticky sections
export function StickyModel({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollY = window.scrollY;

      // Calculate progress through the sticky container
      const scrollStart = containerTop;
      const scrollEnd = containerTop + containerHeight - viewportHeight;
      const scrollDistance = scrollEnd - scrollStart;

      if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else if (scrollY > scrollEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollY - scrollStart) / scrollDistance;
        // Animation completes at 80% of scroll to give buffer time
        const animationProgress = Math.min(progress * 1.25, 1);
        setScrollProgress(animationProgress);
        console.log(
          "Scroll Y:",
          scrollY,
          "Container top:",
          containerTop,
          "Progress:",
          progress,
          "Animation:",
          animationProgress
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 3, 11], fov: 50 }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={1.5} />
        <pointLight position={[0, 10, 0]} intensity={1} />
        <hemisphereLight
          color="#ffffff"
          groundColor="#444444"
          intensity={0.8}
        />

        <Suspense fallback={null}>
          <Model
            scrollProgress={scrollProgress}
            position={[0, -0.3, 0]}
            rotation={[0, Math.PI, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Debug indicator */}
      <div className="fixed top-16 left-4 z-30 text-white bg-black/50 px-3 py-1 rounded">
        Animation: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}
