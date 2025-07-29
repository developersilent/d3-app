"use client";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import Lenis from "lenis";

// Animated GLB Component with Lenis scroll integration
function AnimatedModel({ scrollProgress, ...props }: any) {
  const { scene, animations } = useGLTF("/drill.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationCompleteRef = useRef(false);

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

  // useFrame for smooth 60fps animation control
  useFrame(() => {
    // Use scrollProgress prop from Lenis instead of useScroll
    const scrollOffset = scrollProgress || 0;

    // Handle animation completion and delayed fade
    if (scrollOffset >= 0.99 && !animationCompleteRef.current) {
      animationCompleteRef.current = true;
      console.log("Animation completed, starting 2-second delay before fade");

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      fadeTimeoutRef.current = setTimeout(() => {
        console.log("Starting fade out");
        let currentOpacity = 1;
        const fadeInterval = setInterval(() => {
          currentOpacity -= 0.05;
          if (currentOpacity <= 0) {
            currentOpacity = 0;
            clearInterval(fadeInterval);
            console.log("Fade out complete");
          }
          setFadeOpacity(currentOpacity);
        }, 50);
      }, 2000);
    } else if (scrollOffset < 0.99) {
      animationCompleteRef.current = false;
      setFadeOpacity(1);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
    }

    // Apply fade opacity to materials
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat: any) => {
            mat.opacity = fadeOpacity;
          });
        } else {
          child.material.opacity = fadeOpacity;
        }
      }
    });

    // Control animation based on scroll - improved performance
    Object.values(actions).forEach((action: any) => {
      if (action) {
        const duration = action.getClip().duration;
        // Direct scroll offset mapping for smooth animation
        action.time = scrollOffset * duration;
      }
    });
  });

  return <primitive object={scene} {...props} />;
}

// Canvas with lighting and controls
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with scroll speed limiting
    const lenis = new Lenis({
      duration: 2.5, // Increased duration for slower scrolling
      easing: (t) => 1 - Math.pow(1 - t, 5), // Even stronger easing to prevent fast scrolling
      smoothWheel: true,
      wheelMultiplier: 0.3, // Much lower for slower scroll response
      touchMultiplier: 0.8, // Reduced touch sensitivity
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.02, // Very low for minimal momentum
    });

    lenisRef.current = lenis;

    // Lenis scroll event with stability fix
    lenis.on("scroll", (e: any) => {
      const { scroll, limit } = e;

      if (limit <= 0) {
        setScrollProgress(0);
        return;
      }

      let scrollPercent = scroll / limit;

      // Add stability at the end range to prevent jumping
      if (scrollPercent >= 0.98) {
        scrollPercent = 1; // Lock to 100% when very close
      } else if (scrollPercent <= 0.02) {
        scrollPercent = 0; // Lock to 0% when very close to start
      }

      const clampedProgress = Math.min(Math.max(scrollPercent, 0), 1);
      setScrollProgress(clampedProgress);

      console.log(
        "Scroll values - scroll:",
        scroll,
        "limit:",
        limit,
        "raw progress:",
        scroll / limit,
        "final progress:",
        clampedProgress
      );
    });

    // Force scroll to top on initialization
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
      setScrollProgress(0);
    }, 100);

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed Canvas Container */}
      <div className="fixed inset-0 w-screen h-screen bg-black z-10">
        <Canvas camera={{ position: [0, 5, 13], fov: 38 }}>
          {/* Simple normal lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />

          <Suspense fallback={null}>
            <AnimatedModel
              scrollProgress={scrollProgress}
              position={[0, -0.3, 0]}
              rotation={[0, Math.PI, 0]}
            />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Scrollable Content - Creates scroll space */}
      <div className="relative z-20 pointer-events-none">
        <div className="h-[500vh]" />{" "}
        {/* 5x viewport height for scroll space */}
      </div>

      {/* Optional: Scroll Progress Indicator */}
      <div className="fixed top-4 left-4 z-30 text-white bg-black/50 px-3 py-1 rounded">
        Scroll: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
}
