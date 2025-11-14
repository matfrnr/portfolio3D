/**
 * Utilitaires d'optimisation de performance
 */

/**
 * Throttle une fonction avec un délai minimum
 * @param {Function} func - Fonction à throttle
 * @param {number} delay - Délai minimum en ms
 * @returns {Function} Fonction throttled
 */
export const throttle = (func, delay) => {
  let lastRun = 0;
  let timeoutId = null;

  return function executedFunction(...args) {
    const now = Date.now();
    const timeSinceLastRun = now - lastRun;

    if (timeSinceLastRun >= delay) {
      func(...args);
      lastRun = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        lastRun = Date.now();
        timeoutId = null;
      }, delay - timeSinceLastRun);
    }
  };
};

/**
 * Debounce une fonction
 * @param {Function} func - Fonction à debounce
 * @param {number} delay - Délai d'attente en ms
 * @returns {Function} Fonction debounced
 */
export const debounce = (func, delay) => {
  let timeoutId = null;

  return function executedFunction(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Lazy load une ressource avec requestIdleCallback
 * @param {Function} callback - Fonction à exécuter en idle
 * @param {object} options - Options pour requestIdleCallback
 */
export const lazyLoad = (callback, options = {}) => {
  if (typeof requestIdleCallback !== "undefined") {
    return requestIdleCallback(callback, options);
  } else {
    return setTimeout(callback, 1);
  }
};

/**
 * Preload une image
 * @param {string} src - URL de l'image
 * @returns {Promise} Promise résolvée quand l'image est chargée
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Détecte si l'appareil est mobile
 * @returns {boolean}
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Crée une image placeholder LQIP (Low Quality Image Placeholder)
 * @param {string} color - Couleur hex
 * @param {number} width - Largeur de l'image
 * @param {number} height - Hauteur de l'image
 * @returns {string} Data URL du placeholder
 */
export const createLQIP = (color = "#f3f3f3", width = 400, height = 300) => {
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3Crect fill="${encodeURIComponent(
    color
  )}" width="${width}" height="${height}"/%3E%3C/svg%3E`;
};

/**
 * Optimise les interactions de scroll avec passive event listeners
 * @param {HTMLElement} element - Élément à observer
 * @param {Function} callback - Callback lors du scroll
 * @param {number} threshold - Throttle threshold en ms
 */
export const optimizeScrollListener = (element, callback, threshold = 16) => {
  let lastScrollTime = 0;

  const handleScroll = () => {
    const now = Date.now();
    if (now - lastScrollTime >= threshold) {
      callback();
      lastScrollTime = now;
    }
  };

  element.addEventListener("scroll", handleScroll, { passive: true });

  return () => element.removeEventListener("scroll", handleScroll);
};

/**
 * Monitore les Core Web Vitals
 */
export const monitorCoreWebVitals = () => {
  if ("web-vital" in window) {
    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
        });
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        console.log("LCP monitoring not supported");
      }
    }

    // Cumulative Layout Shift
    if ("PerformanceObserver" in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              console.log("CLS:", clsValue);
            }
          }
        });
        observer.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.log("CLS monitoring not supported");
      }
    }
  }
};

export default {
  throttle,
  debounce,
  lazyLoad,
  preloadImage,
  isMobile,
  createLQIP,
  optimizeScrollListener,
  monitorCoreWebVitals,
};
