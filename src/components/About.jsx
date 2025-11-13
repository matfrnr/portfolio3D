import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Présentation👽 </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Vous ne me connaissez pas encore, alors laissez-moi me présenter et vous raconter mon histoire. Depuis tout jeune, je suis passionné par le développement, et cette passion n’a jamais cessé de grandir. Enfant, j’étais très curieux et je posais mille questions. Le jour de mes 12 ans, j’ai reçu mon premier ordinateur, un moment décisif qui a marqué le début de mon aventure dans la programmation. Très vite, j’ai commencé à apprendre en autodidacte, créant mes premiers sites web.
        <br></br>
        <br></br>
        Avec le temps, j’ai élargi mes compétences bien au-delà du web. J’ai exploré différents langages, frameworks et environnements, ce qui m’a permis d’être polyvalent. Chaque projet a été une nouvelle opportunité d’apprendre et de me dépasser. J’adore les défis et je n’ai pas froid aux yeux. Autant dire que la motivation ne manque pas 👨‍💻
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
