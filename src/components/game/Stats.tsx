import '../../styles/stats.css';

import React from 'react';
import {CardSuit} from '../../types/types';
import {Card} from '@blueprintjs/core';

export default function Stats() {
    const getRound = () => 10;
    const getDealer = () => 'Max';
    const getTrump = () => CardSuit.RED;
    const getTurnPlayer = () => 'Max';
    const getPlayerData = () => [
        {name: 'Max', score: 30, bid: 2, actual: 1},
        {name: 'Max', score: 30, bid: 2, actual: 1},
        {name: 'Max', score: 30, bid: 2, actual: 1},
        {name: 'Max', score: 30, bid: 2, actual: 1},
        {name: 'Max', score: 30, bid: 2, actual: 1},
    ];
    return (
        <div className="stats-wrapper">
            <Card className="stats">
                <div className="round-stats">
                    <span className="bp4-callout round-stat">Round: {getRound()}</span>
                    <span className="bp4-callout round-stat">Dealer: {getDealer()}</span>
                    <span className="bp4-callout round-stat">Trump: {getTrump()}</span>
                    <span className="bp4-callout round-stat">Turn: {getTurnPlayer()}</span>
                </div>
                <div className="bp4-callout score-wrapper">
                    <table className="bp4-html-table score">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Score</th>
                                <th>Bid</th>
                                <th>Actual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getPlayerData().map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.name}</td>
                                    <td>{entry.score}</td>
                                    <td>{entry.bid}</td>
                                    <td>{entry.actual}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
