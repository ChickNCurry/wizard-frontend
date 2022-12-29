import React from 'react';

import {cardProps} from '../types/props';

export default function Card({cardSuit, cardType, rotation}: cardProps) {
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
