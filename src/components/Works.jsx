import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection basée sur la largeur d'écran
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    // Version ultra basique pour mobile sans animations
    return (
      <div className='bg-tertiary p-4 rounded-lg w-full mb-6'>
        <div className='relative w-full'>
          <img
            src={image}
            alt={name}
            className='w-full h-48 object-cover rounded-lg'
          />

          {/* Logo GitHub positionné sur l'image comme dans la version originale */}
          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <h3 className='text-white font-bold text-xl mt-3'>{name}</h3>
        <p className='text-secondary text-sm mt-2'>{description}</p>

        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-sm ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Version originale avec Tilt pour desktop
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[470px] flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div>
            <p className={`${styles.sectionSubText} `}>Réalisations</p>
            <h2 className={`${styles.sectionHeadText}`}>Mes projets 🚀</h2>
          </div>
          <div className='w-full flex'>
            <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
              Découvrez une sélection de mes réalisations témoignant de mes compétences et de mon expérience. Vous trouverez pour chaque réalisation une brève description, la technologie utilisée et un lien vers le code source sur GitHub. En espérant que cela vous plaise😉
            </p>
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>Réalisations</p>
            <h2 className={`${styles.sectionHeadText}`}>Mes projets 🚀</h2>
          </motion.div>
          <div className='w-full flex'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              Découvrez une sélection de mes réalisations témoignant de mes compétences et de mon expérience. Vous trouverez pour chaque réalisation une brève description, la technologie utilisée et un lien vers le code source sur GitHub. En espérant que cela vous plaise😉
            </motion.p>
          </div>
        </>
      )}

      <div className='mt-10 flex flex-wrap gap-0 md:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");