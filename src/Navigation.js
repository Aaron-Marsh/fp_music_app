import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    let goTo = useNavigate();

    return(
        <nav>
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/bands" className="link">Bands</NavLink>
            <NavLink to="/lyrics" className="link">Song Lyrics</NavLink>
            <a onClick={() => goTo(-1)} className="link back">Go back</a>
        </nav>
    )
}

export default Navigation
