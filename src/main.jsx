import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enregistrer le Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/portfolio3D/sw.js').catch((err) => {
      console.log('Service Worker registration failed:', err);
    });
  });
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Throttle helper - limiter la fréquence d'exécution
const throttle = (func, delay) => {
  let lastRun = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRun >= delay) {
      func(...args);
      lastRun = now;
    }
  };
};

if (window.innerWidth >= 768) {
  let lastMouseX = 0;
  let lastMouseY = 0;

  const handleMouseMove = throttle((e) => {
    const spaceship = document.querySelector('.spaceship');
    if (!spaceship) return;

    const deltaX = e.pageX - lastMouseX;
    const deltaY = e.pageY - lastMouseY;
    const angle = Math.atan2(deltaY, deltaX);

    spaceship.style.left = e.pageX + 'px';
    spaceship.style.top = e.pageY + 'px';
    spaceship.style.transform = `rotate(${angle}rad)`;

    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    smoke.style.left = (e.pageX - 5) + 'px';
    smoke.style.top = (e.pageY - 5) + 'px';
    document.body.appendChild(smoke);

    setTimeout(() => {
      smoke.remove();
    }, 1000);

    lastMouseX = e.pageX;
    lastMouseY = e.pageY;
  }, 16); // ~60fps (1000ms / 60 ≈ 16ms)

  document.addEventListener('mousemove', handleMouseMove);
}