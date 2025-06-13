import React, { useEffect, useState } from 'react';

const Compass = () => {
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const handleOrientation = (event) => {
            const alpha = event.alpha; // Get the compass direction
            setDirection(alpha);
        };

        window.addEventListener('deviceorientation', handleOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    return (
        <div className="compass" style={{ transform: `rotate(${direction}deg)` }}>
            <div className="needle"></div>
            <div className="label">{direction.toFixed(0)}°</div>
        </div>
    );
};

export default Compass;