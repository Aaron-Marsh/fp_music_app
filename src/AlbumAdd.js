import React from 'react'
import { useDispatch } from 'react-redux';

import {addAlbum, deleteAlbum} from './actions/action';


function AlbumAdd() {
    const dispatch = useDispatch();

    const handleSubmitAdd = e => {
        e.preventDefault();
        dispatch(addAlbum(e));
    }
    const handleSubmitDelete = e => {
        e.preventDefault();
        dispatch(deleteAlbum(e));
    }


    return (
        <>
        <form onSubmit={handleSubmitAdd}>
            <input type="text" name="name"></input>
            <input type="submit"></input>
        </form>
        <form onSubmit={handleSubmitDelete}>
            <input type="text" name="name"></input>
            <input type="submit"></input>
        </form>
        </>
    )
}

export default AlbumAdd
