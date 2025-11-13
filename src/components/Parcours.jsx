import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { vaisseau } from "../assets";
import LazyImage from "./LazyImage";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { parcours } from "../constants";

const ParcoursCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <LazyImage
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[100%] h-[100%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Parcours = () => {
    // Check if the device is mobile
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        // Update the state based on window width
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for resize
        window.addEventListener('resize', checkMobile);

        // Clean up event listener
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            <motion.div variants={textVariant()} className="flex flex-col items-center">
                <img src={vaisseau} alt='logo' className='w-14 h-14 object-contain mb-5' />

                <p className={`${styles.sectionSubText} text-center`}>
                    Ce que j'ai étudié jusqu'à présent
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    <span role="img" aria-label="briefcase" style={{ fontSize: '0.6em', verticalAlign: 'middle' }}>🎓</span>
                    Mon parcours
                    <span role="img" aria-label="briefcase" style={{ fontSize: '0.6em', verticalAlign: 'middle' }}>🎓</span>
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline animate={!isMobile}>
                    {parcours.map((parcours, index) => (
                        <ParcoursCard
                            key={`experience-${index}`}
                            experience={parcours}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Parcours, "parcours");