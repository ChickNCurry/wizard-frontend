import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './Layout';
import StartPage from '../pages/StartPage';
import LobbyPage from '../pages/LobbyPage';
import LoginPage from '../pages/LoginPage';
import NoPage from '../pages/NoPage';
import GamePage from '../pages/GamePage';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<LoginPage />}></Route>
                        <Route path="start" element={<StartPage />}></Route>
                        <Route path="lobby" element={<LobbyPage />}></Route>
                        <Route path="game" element={<GamePage />}></Route>
                        <Route path="*" element={<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
