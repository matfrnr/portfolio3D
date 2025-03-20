import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleTechnologies, setVisibleTechnologies] = useState(technologies);
  const [showAll, setShowAll] = useState(false);
  
  // Détecter si on est sur mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérification initiale
    checkIsMobile();
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener("resize", checkIsMobile);
    
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  
  // Configurer les technologies visibles en fonction du device
  useEffect(() => {
    if (isMobile && !showAll) {
      // Sur mobile, montrer seulement la moitié des technologies
      setVisibleTechnologies(technologies.slice(0, Math.ceil(technologies.length / 2)));
    } else {
      // Sur desktop ou après "Voir plus", montrer toutes les technologies
      setVisibleTechnologies(technologies);
    }
  }, [isMobile, showAll]);
  
  const handleShowMore = () => {
    setShowAll(true);
    // Montrer toutes les technologies
    setVisibleTechnologies(technologies);
  };
  
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {visibleTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      
      {/* Afficher le bouton "Voir plus" uniquement sur mobile et si toutes les technologies ne sont pas affichées */}
      {isMobile && !showAll && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleShowMore}
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