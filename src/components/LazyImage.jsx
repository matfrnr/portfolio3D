import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className = '', style = {}, blurDataURL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f3f3" width="400" height="300"/%3E%3C/svg%3E', ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(blurDataURL);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        setImageSrc(src);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '100px', // Augmenter pour précharger plus tôt
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [src, blurDataURL]);

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100 blur-none' : 'opacity-75 blur-sm'} transition-all duration-500`}
            style={style}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            {...props}
        />
    );
};

export default LazyImage;
