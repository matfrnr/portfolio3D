import React, { useState, useEffect, useRef } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4); // Commencer avec 4 technologies sur mobile
  const containerRef = useRef(null);

  useEffect(() => {
    // Détecter si c'est mobile (simplifié, vous pourriez utiliser une bibliothèque comme react-responsive)
    const isMobile = window.innerWidth < 768;

    // Définir le nombre initial d'éléments en fonction de l'appareil
    const initialItems = isMobile ? 4 : 8;
    setItemsToShow(initialItems);

    // Charger les technologies initiales
    setVisibleTechnologies(technologies.slice(0, initialItems));
  }, []);

  const handleLoadMore = () => {
    // Ajouter 4 technologies de plus à chaque clic
    const newItemsToShow = Math.min(itemsToShow + 4, technologies.length);
    setItemsToShow(newItemsToShow);
    setVisibleTechnologies(technologies.slice(0, newItemsToShow));

    // Optionnel: faire défiler légèrement vers le bas pour montrer les nouveaux éléments
    setTimeout(() => {
      if (containerRef.current) {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Optimisation des performances pour les Canvas 3D
  const BallCanvasWithOptimization = ({ icon, index }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.disconnect();
        }
      };
    }, []);

    return (
      <div ref={ref} className="w-28 h-28">
        {inView ? (
          <BallCanvas icon={icon} />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full">
            <div className="w-16 h-16 animate-pulse bg-white/20 rounded-full"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology, index) => (
          <BallCanvasWithOptimization
            key={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
      </div>

      {visibleTechnologies.length < technologies.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");