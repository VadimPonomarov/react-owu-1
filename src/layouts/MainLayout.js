import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div className={'container mt-5'}>
            <nav className={'navbar navbar-expand-lg navbar-light bg-light text-center justify-content-center border'}>
                <NavLink to={'/'} className={'btn border m-2'}>Users</NavLink>
                <NavLink to={'/posts'} className={'btn border m-2'}>Posts</NavLink>
            </nav>
            <div className={'border p-2'}>
                <Outlet/>
            </div>


        </div>
    );
}

export default MainLayout;