import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Fonction pour détecter si l'appareil est mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Cache global pour éviter les rechargements multiples du modèle
let cachedModel = null;

const Earth = () => {
  const mobile = isMobile();
  const scale = mobile ? 2.2 : 2.5;
  const modelRef = useRef();

  // Utiliser le cache global pour le modèle
  if (!cachedModel) {
    cachedModel = useGLTF("./planet/scene.gltf");
  }

  const earth = cachedModel;

  // Assurer que la rotation est toujours active
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={earth.scene.clone()} // Clone pour éviter les conflits de référence
      scale={scale}
      position-y={0}
      rotation-y={0}
    />
  );
};

// Composant pour forcer les rendus et réinitialiser la caméra
const SceneController = () => {
  const { gl, scene, camera } = useThree();

  useFrame(() => {
    gl.render(scene, camera);
  });

  // Réinitialiser la position de la caméra
  useEffect(() => {
    camera.position.set(-4, 3, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const EarthCanvas = () => {
  const mobile = isMobile();
  const [key, setKey] = useState(0); // Utilisé pour forcer le remontage
  const canvasRef = useRef(null);

  // Force le remontage du composant lors des transitions de page
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setKey(prev => prev + 1);
      }
    };

    // Détection de retour à la page
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Nettoyer lors du démontage
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Précharger le modèle au montage
  useEffect(() => {
    useGLTF.preload("./planet/scene.gltf");

    // Nettoyage complet lors du démontage
    return () => {
      if (canvasRef.current) {
        // Forcer le nettoyage du contexte WebGL
        const gl = canvasRef.current?.__r3f?.gl;
        if (gl) {
          gl.dispose();
        }
      }

      // Libérer les ressources du modèle lorsqu'on quitte complètement
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        cachedModel = null;
        useGLTF.clear();
      }
    };
  }, []);

  const dprValue = mobile ? [0.8, 1.5] : [1, 2];

  return (
    <div style={{ width: "100%", height: "100%" }} key={key}>
      <Canvas
        ref={canvasRef}
        shadows={!mobile}
        frameloop='always'
        dpr={dprValue}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          antialias: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        style={{ touchAction: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0); // Fond transparent
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={mobile ? 1.5 : 2}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <SceneController />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;