import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';
import iconMail from '../assets/liens/iconMail.webp';
import iconLinkedin from '../assets/liens/iconLinkedin.webp';
import iconGithub from '../assets/liens/iconGithub.webp';

const BottomRightBanner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBanner = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Icônes qui apparaissent au clic - en vertical */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col space-y-0 mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.button
                            className="text-white rounded-full p-3 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href='https://github.com/matfrnr' target='blank'> <LazyImage src={iconGithub} alt="Icon 3" style={{ width: '2.2rem', borderRadius: '50%' }} /></a>
                        </motion.button>

                        <motion.button
                            className="text-white rounded-full p-3 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href='https://www.linkedin.com/in/matheofournier/' target='blank'> <LazyImage src={iconLinkedin} alt="Icon 1" style={{ width: '2.2rem', borderRadius: '50%' }} /></a>
                        </motion.button>

                        <motion.button
                            className="text-white rounded-full p-3 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href='mailto:fourniermatheo9@gmail.com' target='blank'> <LazyImage src={iconMail} alt="Icon 2" style={{ width: '2.2rem', borderRadius: '50%' }} /></a>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bandeau principal avec icône au lieu de texte */}
            <motion.button
                className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                onClick={toggleBanner}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                >
                    {isOpen ? '❌' : '🔗'}
                </motion.span>
            </motion.button>
        </div>
    );
};

export default BottomRightBanner;