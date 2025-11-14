import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Hook pour détecter la taille de l'écran
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Qui suis-je ?";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const size = useWindowSize();

  useEffect(() => {
    let animationFrameId;
    let elapsed = 0;
    const tickRate = isDeleting ? 100 : 200;

    const animate = () => {
      elapsed += 16;
      if (elapsed >= tickRate) {
        if (!isDeleting) {
          setText(prev => {
            const newText = fullText.substring(0, prev.length + 1);
            if (newText.length === fullText.length) {
              setTimeout(() => setIsDeleting(true), 1000);
            }
            return newText;
          });
        } else {
          setText(prev => {
            const newText = fullText.substring(0, prev.length - 1);
            if (newText.length === 0) {
              setIsDeleting(false);
              setLoopNum(prev => prev + 1);
            }
            return newText;
          });
        }
        elapsed = 0;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDeleting, loopNum, size.width, fullText]);

  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-screen mx-auto hidden sm:block">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF] inline-flex">
              {text}
              {/* Le curseur est retiré ici */}
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je suis un développeur full-stack passionné{" "}
            <br className="sm:block hidden" />
            qui conçois et développe des             <br className="sm:block hidden" />
            applications web modernes.
          </p>
          <br>
          </br>
          <p className="text-[#915EFF] font-semibold text-[18px]">Embarquez pour un voyage <br></br>à bord de mon portfolio 🚀🧑‍🚀</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" onClick={handleScroll}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;