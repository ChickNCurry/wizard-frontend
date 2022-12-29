import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './Layout';
import Login from './login/Login';
import Start from './start/Start';
import Lobby from './lobby/Lobby';
import Game from './game/Game';
import Error from './error/Error';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Login />}></Route>
                        <Route path="start" element={<Start />}></Route>
                        <Route path="lobby" element={<Lobby />}></Route>
                        <Route path="game" element={<Game />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
