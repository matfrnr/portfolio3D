import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

if (window.innerWidth >= 768) {
  let lastMouseX = 0;
  let lastMouseY = 0;

  document.addEventListener('mousemove', (e) => {
    const spaceship = document.querySelector('.spaceship');
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
  });
}