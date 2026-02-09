import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Use refs to store coordinates to persist them across re-renders (when state changes)
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const trailerX = useRef(0);
    const trailerY = useRef(0);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;

        if (!cursor || !trailer) return;

        const onMouseMove = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;

            // Immediate update for the dot
            cursor.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
        };

        const animate = () => {
            // Lerp for the trailer (0.1 is the speed/smoothness factor)
            trailerX.current += (mouseX.current - trailerX.current) * 0.1;
            trailerY.current += (mouseY.current - trailerY.current) * 0.1;

            trailer.style.transform = `translate3d(${trailerX.current}px, ${trailerY.current}px, 0) scale(${isHovering ? 1.5 : 1})`;

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
                    backgroundColor: '#ffffff', // White dot for difference mode
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate3d(-50%, -50%, 0)',
                    marginTop: '-4px', // Center offset
                    marginLeft: '-4px', // Center offset
                    mixBlendMode: 'difference',
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
                    border: '1px solid #ffffff', // White outline for difference mode
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
