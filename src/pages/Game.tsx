import React from 'react';
import Board from '../components/Board';
import Hand from '../components/Hand';
import Info from '../components/Info';

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
