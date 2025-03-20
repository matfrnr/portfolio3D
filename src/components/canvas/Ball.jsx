import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifier si on est sur mobile
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Force renderisation continue
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
    if (isMobile) {
      state.gl.render(state.scene, state.camera);
    }
  });

  return (
    <Float
      speed={isMobile ? 1.5 : 2.5}  // Réduit pour mobile
      rotationIntensity={isMobile ? 0.8 : 1.5}  // Réduit pour mobile
      floatIntensity={isMobile ? 1 : 2}  // Réduit pour mobile
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // S'assurer que le composant est monté côté client
    setMounted(true);
    
    // Vérifier si on est sur mobile
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      frameloop='always'  // Toujours utiliser 'always' pour éviter les problèmes après navigation
      dpr={isMobile ? [0.8, 1.5] : [1, 2]}  // Ajuster pour mobile
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: true
      }}
      style={{ touchAction: 'none' }} // Empêcher les conflits de touch events
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={isMobile ? 0.5 : 1}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;