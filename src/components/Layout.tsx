import React from 'react';
import {Outlet} from 'react-router-dom';

import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className="layout">
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            <div className="outlet-wrapper">
                <Outlet />
            </div>
        </div>
    );
}
