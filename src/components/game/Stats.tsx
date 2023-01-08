import React from 'react';
import {CardSuit} from '../../types/types';

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
        <div className="stats">
            <p>Round: {getRound()}</p>
            <p>Dealer: {getDealer()}</p>
            <p>Trump: {getTrump()}</p>
            <p>Turn: {getTurnPlayer()}</p>
            <p>Data:</p>
            <table className="data">
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
    );
}
