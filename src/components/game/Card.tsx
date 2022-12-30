import React from 'react';

import {CardProps} from '../../types/props';
import {CardSuit, CardType} from '../../types/types';

export default function Card({cardSuit, cardType, rotation, translation}: CardProps) {
    const playCard = (cardSuit: CardSuit, cardType: CardType) => console.log(`played ${cardSuit} ${cardType}`);
    return (
        <div
            className="card"
            style={{
                background: cardSuit,
                transform: `rotate(${rotation ? rotation : 0}deg) translateX(${translation ? translation : 0}px)`,
            }}
            onClick={() => playCard(cardSuit, cardType)}
        >
            {cardType}
        </div>
    );
}
