import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
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

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
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
  const [frameLoop, setFrameLoop] = useState("demand");
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      setFrameLoop("always");

      // Revenir au mode "demand" après une période d'inactivité
      const timer = setTimeout(() => {
        setFrameLoop("demand");
      }, 3000);

      return () => clearTimeout(timer);
    };

    const element = canvasRef.current;
    if (element) {
      element.addEventListener("mouseover", handleInteraction);
      element.addEventListener("touchstart", handleInteraction);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", handleInteraction);
        element.removeEventListener("touchstart", handleInteraction);
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-full">
      <Canvas
        frameloop={frameLoop}
        dpr={[1, 1.5]} // Réduit pour meilleures performances sur mobile
        gl={{ preserveDrawingBuffer: true, powerPreference: 'default' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;