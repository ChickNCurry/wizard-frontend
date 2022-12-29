import React from 'react';

import {CardProps} from '../../types/props';

export default function Card({cardSuit, cardType, rotation}: CardProps) {
    return (
        <div
            className="card"
            style={{
                background: cardSuit,
                transform: `rotate(${rotation}deg)`,
            }}
        >
            {cardType}
        </div>
    );
}
