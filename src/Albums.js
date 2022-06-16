import React from 'react'

import Like from './Like';


const Albums = () => {
    
    return (
    <>
    <h3>Albums:</h3>
    <div style={{display: 'flex'}}>
    <img src="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Help.jpg?itok=sQBcoIcm" width="300px" alt="Help! album cover" />
    <div style={{display: 'block'}}>
    <h3>Title: Help!</h3>
    <p>Released: 6 August 1965</p>
    <ul>
        <li key='1'>Help! <Like /></li>
        <li key='2'>I Need You <Like /></li>
        <li key='3'>Yesterday <Like /></li>
    </ul>
    </div>
    </div>
    </>

    )
}

export default Albums
