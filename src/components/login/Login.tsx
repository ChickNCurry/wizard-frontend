import '../../styles/login.css';

import {Button, Card} from '@blueprintjs/core';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {LoginProps} from '../../types/props';

export default function Login({username, setUsername}: LoginProps) {
    const navigate = useNavigate();
    const [password, setPassword] = useState<string>('');

    const handleUsername = (event: any) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const handleRegister = () => {};

    const handleLogin = () => {
        if (username === '' || password === '') return;
        // login
        navigate('/start');
    };

    return (
        <div className="login-wrapper">
            <Card className="login">
                <input
                    className="bp4-input"
                    type="text"
                    value={username}
                    onChange={handleUsername}
                    placeholder="Username"
                />
                <input
                    className="bp4-input"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Password"
                />
                <Button onClick={handleLogin}>Login</Button>
                <Button onClick={handleRegister}>Register</Button>
            </Card>
        </div>
    );
}
