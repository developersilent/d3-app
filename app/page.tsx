"use client";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import Lenis from "lenis";

// Animated GLB Component
function AnimatedModel({ scrollProgress, ...props }: any) {
  const { scene, animations } = useGLTF("/rill.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  const mixerRef = useRef(mixer);
  const actionsInitialized = useRef(false);

  useEffect(() => {
    mixerRef.current = mixer;
  }, [mixer]);

  // Remove platform only
  useEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        // Remove platform/ground objects (common names)
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
      });
    }
  }, [scene]);

  // Initialize actions only once
  useEffect(() => {
    if (!mixerRef.current || Object.keys(actions).length === 0) return;

    console.log("Initializing actions:", Object.keys(actions));

    Object.values(actions).forEach((action: any) => {
      if (action) {
        action.reset();
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.enabled = true;
        action.play();
        action.paused = true;
        console.log("Action initialized:", action.getClip().name);
      }
    });

    actionsInitialized.current = true;
  }, [actions, mixer]);

  // Scroll-based animation update with fallback
  useEffect(() => {
    console.log("Scroll effect triggered:", scrollProgress);
    console.log("Mixer exists:", !!mixerRef.current);
    console.log("Actions count:", Object.keys(actions).length);
    console.log("Actions initialized:", actionsInitialized.current);

    if (!mixerRef.current) return;

    // If no animations, just rotate the model based on scroll as fallback
    if (Object.keys(actions).length === 0) {
      console.log("No animations found, using rotation fallback");
      if (scene) {
        scene.rotation.x = scrollProgress * Math.PI * 0.2; // Slight pitch
        scene.rotation.z = scrollProgress * Math.PI * 0.1; // Slight roll
      }
      return;
    }

    if (!actionsInitialized.current) return;

    // Animation control with loop back to start
    Object.values(actions).forEach((action: any) => {
      if (action) {
        const duration = action.getClip().duration;
        // Create a loop: 0-50% scroll = 0-100% animation, 50-100% scroll = 100-0% animation
        let animationProgress;
        if (scrollProgress <= 0.5) {
          // First half: play forward
          animationProgress = scrollProgress * 2; // 0 to 1
        } else {
          // Second half: play backward
          animationProgress = 2 - scrollProgress * 2; // 1 to 0
        }

        action.time = animationProgress * duration;
        console.log(
          "Animation progress:",
          animationProgress,
          "Action time:",
          action.time
        );
      }
    });

    mixerRef.current.update(0);
  }, [scrollProgress, actions, scene]);

  return <primitive object={scene} {...props} />;
}

// Canvas with lighting and controls
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.1,
    });

    lenisRef.current = lenis;

    // Lenis scroll event with proper calculation
    lenis.on("scroll", (e: any) => {
      const { scroll, limit } = e;
      // Ensure limit is not 0 to avoid division by zero
      const scrollPercent = limit > 0 ? scroll / limit : 0;
      const clampedProgress = Math.min(Math.max(scrollPercent, 0), 1);
      setScrollProgress(clampedProgress);
      console.log(
        "Scroll values - scroll:",
        scroll,
        "limit:",
        limit,
        "progress:",
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
        <Canvas camera={{ position: [0, 4, 10], fov: 40 }}>
          {/* Simple normal lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />

          <Suspense fallback={null}>
            <AnimatedModel
              scrollProgress={scrollProgress}
              position={[0, 0, 0]}
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
