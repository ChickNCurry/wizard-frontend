import '../../styles/pile.css';

import React from 'react';
import {CardObject, CardSuit, CardType} from '../../types/types';
import Card from './Card';

export default function Pile() {
    const getPile = () => {
        const pile: CardObject[] = [
            {suit: CardSuit.BLUE, type: CardType.EIGHT},
            {suit: CardSuit.GREEN, type: CardType.EIGHT},
            {suit: CardSuit.RED, type: CardType.EIGHT},
            {suit: CardSuit.BLUE, type: CardType.EIGHT},
            {suit: CardSuit.GREEN, type: CardType.EIGHT},
            {suit: CardSuit.BLUE, type: CardType.EIGHT},
            {suit: CardSuit.GREEN, type: CardType.EIGHT},
            {suit: CardSuit.RED, type: CardType.EIGHT},
            {suit: CardSuit.BLUE, type: CardType.EIGHT},
            {suit: CardSuit.GREEN, type: CardType.EIGHT},
        ];
        const start = (-pile.length * 20) / 2;
        return pile.map((card, index) => (
            <Card key={index} cardSuit={card.suit} cardType={card.type} translation={start + index * 20} />
        ));
    };
    return (
        <div className="pile-wrapper">
            <div className="pile">{getPile()}</div>
        </div>
    );
}
