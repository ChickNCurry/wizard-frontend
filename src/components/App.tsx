import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './Layout';
import Login from '../pages/Login';
import Start from '../pages/Start';
import Lobby from '../pages/Lobby';
import Game from '../pages/Game';
import Error from '../pages/Error';

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
