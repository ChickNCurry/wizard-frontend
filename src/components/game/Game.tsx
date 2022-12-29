import React from 'react';
import Board from './Board';
import Hand from './Hand';
import Info from './Info';

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
