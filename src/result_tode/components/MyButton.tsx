import React, { useState } from 'react';

export const MyButton: React.FC<{ onClick: () => void, buttonText: string }> = ({ onClick, buttonText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? '#45a049' : '#4CAF50',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px',
                cursor: 'pointer',
                borderRadius: '12px',
                transitionDuration: '0.4s',
            }}
        >
            {buttonText}
        </button>
    );
};