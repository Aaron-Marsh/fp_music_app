import React from 'react';
import { useSelector } from 'react-redux';

function albumList () {
    const albums = useSelector(state => state.all)
    const renderAlbums = () => albums.map(album => <li>{album.name}</li>)

    return (
        <section>
            {renderAlbums()}
        </section>
    )
}

export default albumList
