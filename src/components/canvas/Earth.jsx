import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

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

  // Ne pas utiliser le paramètre "true" qui causait des problèmes
  const earth = useGLTF("./planet/scene.gltf");

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
  });
  return null;
};

// Le contenu original du Canvas
const EarthCanvasContent = () => {
  const mobile = isMobile();

  // Réglages moins agressifs pour garantir l'affichage
  const dprValue = mobile ? [0.8, 1.5] : [1, 2];

  return (
    <Canvas
      shadows={!mobile} // Désactiver les ombres sur mobile
      frameloop='demand' // Utiliser 'demand' au lieu de 'never' qui était trop restrictif
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
        {mobile && <AutoRotate />} {/* Assure la rotation même sur mobile */}
        <Preload all /> {/* Garder le préchargement pour éviter les problèmes d'affichage */}
      </Suspense>
    </Canvas>
  );
};

// Composant mobile avec chargement/déchargement conditionnel
const MobileEarthCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mettre à jour l'état lorsque la visibilité change
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Utiliser le viewport comme zone d'observation
        rootMargin: '0px', // Pas de marge
        threshold: 0.1, // Considérer visible dès que 10% est visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Nettoyer l'observer lorsque le composant est démonté
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Utilisez le même style que celui que vous aviez dans votre composant original
  // Ces propriétés CSS garantissent que le conteneur se comporte exactement comme avant
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {isVisible && <EarthCanvasContent />}
    </div>
  );
};

// Le composant principal qui choisit entre la version mobile et desktop
const EarthCanvas = () => {
  const mobile = isMobile();

  // Si mobile, utiliser la version avec chargement/déchargement conditionnel
  // Sinon, utiliser la version originale
  return mobile ? <MobileEarthCanvas /> : <EarthCanvasContent />;
};

export default EarthCanvas;