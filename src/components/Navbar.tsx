import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Login</Link>
            <Link to="/start">Start</Link>
            <Link to="/lobby">Lobby</Link>
            <Link to="/game">Game</Link>
        </nav>
    );
}
