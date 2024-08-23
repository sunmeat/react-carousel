import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // npm install framer-motion
import '../styles/karusel.css';

const CustomCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="custom-carousel">
            <button className="carousel-control prev" onClick={handlePrev}>
                ‹
            </button>
            <div className="carousel-inner">
                {images.map((imgSrc, index) => (
                    <motion.div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </div>
            <button className="carousel-control next" onClick={handleNext}>
                ›
            </button>
        </div>
    );
};

export default CustomCarousel;