import React from 'react';
import {CardObject, CardSuit, CardType} from '../types/types';
import Card from './Card';

export default function Hand() {
    const getCards = () => {
        const cards: CardObject[] = [
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

        const stepSize = 90 / cards.length;
        let start = -stepSize * Math.floor(cards.length / 2);
        start = cards.length % 2 === 1 ? start - stepSize / 2 : start;

        return cards.map((card, index) => (
            <Card key={index} cardSuit={card.suit} cardType={card.type} rotation={start + index * stepSize} />
        ));
    };
    return <div className="hand">{getCards()}</div>;
}
