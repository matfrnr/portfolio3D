import React, { useState, useEffect } from "react";
import { styles } from "../styles";

const HeroMobile = () => {
    const [text, setText] = useState("");
    const fullText = "Qui suis-je ?";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(fullText.substring(0, text.length + 1));
                if (text.length === fullText.length - 1) {
                    // Attendre un peu avant de commencer à effacer
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setText(fullText.substring(0, text.length - 1));
                if (text.length === 1) {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }
        }, isDeleting ? 100 : 200); // Vitesse d'écriture un peu plus lente que l'effacement

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum]);

    return (
        <section className="relative w-full h-[400px] mx-auto mb-4 block sm:hidden">
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
                        Je suis un développeur front-end passionné{" "}
                        <br className="sm:block hidden" />
                        qui conçois et développe des             <br className="sm:block hidden" />
                        applications web modernes.
                    </p>
        <br></br>
                    <p className="text-[#915EFF] font-semibold">Embarquez pour un voyage à bord de mon portfolio 🚀🧑‍🚀</p>
                </div>
            </div>

            {/* Conteneur pour centrer la ligne ondulée */}
            <div className="absolute bottom-0 w-full flex justify-center mt-10">
                {/* Ligne ondulée violette centrée avec 50% de largeur */}
                <svg
                    className="w-3/5"
                    height="40"
                    viewBox="0 0 400 40"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,20 C33,8 67,32 100,20 C133,8 167,32 200,20 C233,8 267,32 300,20 C333,8 367,32 400,20"
                        stroke="#915EFF"
                        strokeWidth="6"
                        fill="none"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroMobile;