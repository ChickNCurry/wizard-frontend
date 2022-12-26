import React from 'react';
import Board from '../components/Board';
import Card from '../components/Card';
import Hand from '../components/Hand';
import Info from '../components/Info';
import {CardSuit, CardType} from '../types/types';

export default function Game() {
    return (
        <div className="game">
            <Info />
            <div className="field">
                <Board />
                <Hand />
            </div>
        </div>
    );
}
