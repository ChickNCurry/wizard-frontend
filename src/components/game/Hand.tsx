import '../../styles/hand.css';

import React from 'react';
import {CardObject, CardSuit, CardType} from '../../types/types';
import Card from './Card';

export default function Hand() {
    const getHand = () => {
        const hand: CardObject[] = [
            {suit: CardSuit.BLUE, type: CardType.JESTER},
            {suit: CardSuit.GREEN, type: CardType.ONE},
            {suit: CardSuit.RED, type: CardType.TWO},
            {suit: CardSuit.BLUE, type: CardType.THREE},
            {suit: CardSuit.GREEN, type: CardType.FOUR},
            {suit: CardSuit.BLUE, type: CardType.FIVE},
            {suit: CardSuit.GREEN, type: CardType.SIX},
            {suit: CardSuit.RED, type: CardType.SEVEN},
            {suit: CardSuit.BLUE, type: CardType.EIGHT},
            {suit: CardSuit.GREEN, type: CardType.WIZARD},
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
