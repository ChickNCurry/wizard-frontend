import React from 'react';
import Hand from './Hand';
import Info from './Info';
import Pile from './Stack';
import Stack from './Pile';

export default function Game() {
    return (
        <div className="game">
            <Info />
            <div className="table">
                <div className="board">
                    <Pile />
                    <Stack />
                </div>
                <Hand />
            </div>
        </div>
    );
}
