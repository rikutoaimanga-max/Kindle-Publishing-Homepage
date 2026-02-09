import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;

        if (!cursor || !trailer) return;

        let mouseX = 0;
        let mouseY = 0;
        let trailerX = 0;
        let trailerY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for the dot
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const animate = () => {
            // Lerp for the trailer (0.1 is the speed/smoothness factor)
            // Decreased to 0.05 for more "slippery/heavy" feel
            trailerX += (mouseX - trailerX) * 0.05;
            trailerY += (mouseY - trailerY) * 0.05;

            trailer.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0) scale(${isHovering ? 1.5 : 1})`;

            requestAnimationFrame(animate);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        const animationId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, [isHovering]);

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#333', // Dark dot
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate3d(-50%, -50%, 0)',
                    marginTop: '-4px', // Center offset
                    marginLeft: '-4px', // Center offset
                    mixBlendMode: 'difference',
                    color: 'white' // For mix-blend-mode to work against dark backgrounds if needed
                }}
            />
            <div
                ref={trailerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid #333', // Dark outline
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate3d(-50%, -50%, 0)',
                    marginTop: '-20px', // Center offset
                    marginLeft: '-20px', // Center offset
                    transition: 'transform 0.1s ease-out', // Smooth scale transition
                    mixBlendMode: 'difference',
                    backgroundColor: 'rgba(255, 255, 255, 0)'
                }}
            />
        </>
    );
};

export default CustomCursor;
