import '../../styles/game.css';

import React from 'react';
import Hand from './Hand';
import Pile from './Stack';
import Stack from './Pile';
import Stats from './Stats';
import Chat from './Chat';

export default function Game() {
    return (
        <div className="game">
            <div className="info">
                <Stats />
                <Chat user="Max" />
            </div>
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
