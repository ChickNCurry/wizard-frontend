import React from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginProps} from '../../types/props';
import {connect} from '../../types/webSocketFunctions';

export default function Login({playerID, setPlayerID}: LoginProps) {
    const navigate = useNavigate();

    const handleUserName = (event: any) => {
        setPlayerID(event.target.value);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            login();
        }
    };

    const login = () => {
        if (playerID === '') return;
        connect(playerID);
        navigate('/start');
    };

    return (
        <div className="login">
            <label>
                Username:
                <input type="text" value={playerID} onChange={handleUserName} onKeyDown={handleKeyDown} />
            </label>
            <button onClick={login}>Login</button>
        </div>
    );
}
