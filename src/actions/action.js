const addAlbum = e => ({
    type: "ADD_AN_ALBUM",
    payload: { name: e.target.name.value }
})
const deleteAlbum = e => ({
    type: "DELETE_AN_ALBUM",
    payload: { name: e.target.name.value }
})

export {addAlbum, deleteAlbum}
