import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

const SmoothScrollWrapper = ({ children }) => {
    const lenisRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 3.5, // Further increased for "heavy/slippery" feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);

            // Skew effect based on velocity
            if (contentRef.current) {
                // Adjust the multiplier (0.1) to control skew intensity
                const skew = lenis.velocity * 0.15;
                contentRef.current.style.transform = `skewY(${skew}deg)`;
            }

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, []);

    return (
        <div ref={contentRef} style={{ width: '100%', overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default SmoothScrollWrapper;
