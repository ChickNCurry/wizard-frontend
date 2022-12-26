import React from 'react';

import {cardProps} from '../types/props';

export default function Card({cardSuit, cardType}: cardProps) {
    return (
        <div className="card" style={{background: cardSuit}}>
            {cardType}
        </div>
    );
}
