import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);
  
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
    if (isMobile) {
      // Sur mobile, diviser les technologies en deux groupes
      const halfSize = 6;
      const firstHalf = technologies.slice(0, halfSize);
      const secondHalf = technologies.slice(halfSize);
      
      // Afficher le premier ou le deuxième groupe en fonction de currentPage
      setVisibleTechnologies(currentPage === 0 ? firstHalf : secondHalf);
    } else {
      // Sur desktop, montrer toutes les technologies
      setVisibleTechnologies(technologies);
    }
  }, [isMobile, currentPage]);
  
  const handleToggleTechnologies = () => {
    // Basculer entre 0 et 1
    setCurrentPage(currentPage === 0 ? 1 : 0);
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
      
      {/* Afficher le bouton uniquement sur mobile */}
      {isMobile && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleToggleTechnologies}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {currentPage === 0 ? "Voir plus" : "Voir précédent"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");