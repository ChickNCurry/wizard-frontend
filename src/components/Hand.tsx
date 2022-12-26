import React from 'react';
import {CardSuit, CardType} from '../types/types';
import Card from './Card';

export default function Hand() {
    return (
        <div className="hand">
            <Card cardSuit={CardSuit.BLUE} cardType={CardType.EIGHT} />
        </div>
    );
}
