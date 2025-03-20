import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Cache global pour les textures
const textureCache = {};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isMobile, setIsMobile] = useState(false);
  const meshRef = useRef();

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

  // Force une légère rotation continue
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Float
      speed={isMobile ? 1.5 : 2.5}
      rotationIntensity={isMobile ? 0.8 : 1.5}
      floatIntensity={isMobile ? 1 : 2}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
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

// Composant pour forcer le rendu et réinitialiser la caméra
const SceneController = () => {
  const { gl, scene, camera } = useThree();
  
  useFrame(() => {
    gl.render(scene, camera);
  });
  
  return null;
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [key, setKey] = useState(0); // Pour forcer le remontage
  const canvasRef = useRef(null);

  // Précharger la texture
  useEffect(() => {
    if (icon && !textureCache[icon]) {
      textureCache[icon] = true;
      useTexture.preload(icon);
    }
  }, [icon]);

  useEffect(() => {
    // Force le remontage lors des transitions de page
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setKey(prev => prev + 1);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Vérifier si on est sur mobile
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      
      // Nettoyer le contexte WebGL lors du démontage
      if (canvasRef.current) {
        const gl = canvasRef.current?.__r3f?.gl;
        if (gl) {
          gl.dispose();
        }
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }} key={key}>
      <Canvas
        ref={canvasRef}
        frameloop='always'
        dpr={isMobile ? [0.8, 1.5] : [1, 2]}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          antialias: true
        }}
        style={{ touchAction: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0); // Fond transparent
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={isMobile ? 0.5 : 1}
          />
          <Ball imgUrl={icon} />
          <SceneController />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;