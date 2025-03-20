import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Fonction pour détecter si l'appareil est mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

const Earth = () => {
  const mobile = isMobile();
  // Utiliser un scale légèrement réduit sur mobile, mais pas trop
  const scale = mobile ? 2.2 : 2.5;
  
  // Charger le modèle avec useGLTF avec draco (si disponible)
  const earth = useGLTF("./planet/scene.gltf");
  
  // Utiliser useEffect pour nettoyer le cache lors du démontage
  useEffect(() => {
    return () => {
      // Nettoyer le cache pour éviter les problèmes de mémoire
      useGLTF.preload("./planet/scene.gltf");
    };
  }, []);

  return (
    <primitive
      object={earth.scene}
      scale={scale}
      position-y={0}
      rotation-y={0}
    />
  );
};

// Composant qui force le rendu même en mode frameloop='demand'
const AutoRotate = () => {
  useFrame((state) => {
    state.scene.rotation.y += 0.002;
    // Forcer un rendu
    state.gl.render(state.scene, state.camera);
  });
  return null;
};

const EarthCanvas = () => {
  const mobile = isMobile();
  const [mounted, setMounted] = useState(false);
  
  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Réglages moins agressifs pour garantir l'affichage
  const dprValue = mobile ? [0.8, 1.5] : [1, 2];

  if (!mounted) return null;

  return (
    <Canvas
      shadows={!mobile} // Désactiver les ombres sur mobile
      frameloop='always' // Utiliser 'always' au lieu de 'demand' pour assurer l'animation
      dpr={dprValue}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance',
        antialias: true, // Garder l'antialiasing pour la qualité visuelle
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200, // Garder la même distance de vue pour éviter les problèmes
        position: [-4, 3, 6],
      }}
      style={{ touchAction: 'none' }} // Empêcher les conflits de touch events
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={mobile ? 1.5 : 2} // Légèrement réduit sur mobile
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <AutoRotate /> {/* Assure la rotation même après navigation */}
        <ambientLight intensity={0.3} /> {/* Ajouter un éclairage minimal */}
      </Suspense>
      <Preload all /> {/* Garder le préchargement pour éviter les problèmes d'affichage */}
    </Canvas>
  );
};

// Précharger le modèle
useGLTF.preload("./planet/scene.gltf");

export default EarthCanvas;