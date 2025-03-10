import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
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
                    <img
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
    return (
        <>
            <motion.div variants={textVariant()}>
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
                <VerticalTimeline>
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

export default SectionWrapper(Parcours, "work");
