import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lyrics = () => {
    const [lyrics, setLyrics] = useState('')

    useEffect(() => {
        async function getLyrics() {
            let apiCall = await axios.get('https://api.lyrics.ovh/v1/The Beatles/Yesterday')
            setLyrics(apiCall.data.lyrics)
        }
        getLyrics()
    }, [])

    return (
        <>
        <p>{lyrics}</p>
        </>
        )
}

export default Lyrics;
