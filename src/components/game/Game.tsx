import '../../styles/game.css';

import React from 'react';
import Hand from './Hand';
import Pile from './Stack';
import Stack from './Pile';
import Stats from './Stats';
import Chat from './Chat';
import {GameProps} from '../../types/props';

export default function Game({playerID}: GameProps) {
    return (
        <div className="game">
            <div className="info">
                <Stats />
                <Chat playerID={playerID} />
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
