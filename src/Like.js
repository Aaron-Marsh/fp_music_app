import React, { useState }  from 'react'

const Like = () => {
    
    const [favourited, setFavourited] = useState('gray');
    const handleFavouritedClick = () => {
        if (favourited === 'gray') {
            setFavourited('gold')
        } else {
            setFavourited('gray')
        }
    }
    return (
<div onClick={handleFavouritedClick} style = {{color: favourited, 'font-size':'40px', 'line-height':'50%'}}>★</div>
    )
}

export default Like
