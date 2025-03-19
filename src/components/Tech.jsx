import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [renderedTech, setRenderedTech] = useState([]);

  useEffect(() => {
    // Détection mobile
    const checkMobile = () => {
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);

      // Si c'est un mobile, limiter le nombre d'éléments 3D ou les charger progressivement
      if (mobile) {
        // Commencer avec un nombre limité d'éléments
        setRenderedTech(technologies.slice(0, 3));

        // Ajouter progressivement les autres éléments
        const addMoreTech = () => {
          setRenderedTech(prev => {
            const nextIndex = prev.length;
            if (nextIndex >= technologies.length) return prev;

            // Ajouter le prochain élément de technologie
            return [...prev, technologies[nextIndex]];
          });
        };

        // Ajouter un nouvel élément toutes les 300ms
        const interval = setInterval(addMoreTech, 300);
        return () => clearInterval(interval);
      } else {
        // Sur desktop, afficher tous les éléments
        setRenderedTech(technologies);
      }
    };

    checkMobile();
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {renderedTech.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");