import React from 'react';
import {CardObject, CardSuit, CardType} from '../../types/types';
import Card from './Card';

export default function Hand() {
    const getHand = () => {
        const hand: CardObject[] = [
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

        const stepSize = 90 / hand.length;
        let start = -stepSize * Math.floor(hand.length / 2);
        start = hand.length % 2 === 1 ? start - stepSize / 2 : start;

        return hand.map((card, index) => (
            <Card key={index} cardSuit={card.suit} cardType={card.type} rotation={start + index * stepSize} />
        ));
    };
    return (
        <div className="hand-wrapper">
            <div className="hand">{getHand()}</div>
        </div>
    );
}
