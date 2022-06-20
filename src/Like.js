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
<div onClick={handleFavouritedClick} style = {{color: favourited, fontSize:'40px', lineHeight:'50%'}}>★</div>
    )
}

export default Like
