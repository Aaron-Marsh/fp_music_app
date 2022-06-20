import React from 'react'
import { Routes, Route } from 'react-router-dom';

import App from './App';

import Beatles from './Beatles';
import Albums from './Albums';
import Lyrics from './Lyrics'
import Countdown from './Countdown';
import AlbumList from './AlbumList';
import AlbumAdd from './AlbumAdd';
import Greeting from './Greeting';

const RouteList = () => {
return(
        <Routes>
                <Route path="/" element={
                        <>
                        <App subHeading={'Welcome to the site! (this is a prop)'}/>
                        <Countdown />
                        </>
                } />
                <Route path="/bands" element={
                        <>
                        <App subHeading={'Welcome to the bands section! (this is a prop)'} />
                        <Countdown />
                        <Beatles />
                        <Albums />
                        <AlbumList />
                        <AlbumAdd />
                        {/* <Greeting /> */}
                        </>
                } />
                <Route path="/lyrics" element={
                        <>
                        <App subHeading={'Welcome to the lyrics section! (this is a prop)'} />
                        <Countdown />
                        <Lyrics />
                        </>
                } />
        </Routes>
)
}

export default RouteList
