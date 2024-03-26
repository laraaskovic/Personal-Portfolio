import React, { useEffect, useState } from 'react';
import './Cursor.css'; // Ensure this CSS file is updated

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <>
            <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            <div className="cursor-trail" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </>
    );
};

export default Cursor;
