import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './Layout';
import Login from './login/Login';
import Start from './start/Start';
import Lobby from './lobby/Lobby';
import Game from './game/Game';
import Error from './error/Error';

export default function App() {
    const [playerID, setPlayerID] = useState<string>('');
    useEffect(() => {
        console.log(playerID);
    }, [playerID]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login playerID={playerID} setPlayerID={setPlayerID} />}></Route>
                        <Route path="start" element={<Start />}></Route>
                        <Route path="lobby" element={<Lobby />}></Route>
                        <Route path="game" element={<Game playerID={playerID} />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
