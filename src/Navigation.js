import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/bands">Bands</NavLink>
            <NavLink to="/lyrics">Song Lyrics</NavLink>
        </nav>
    )
}

export default Navigation
