const initState = { all: [{id: 1, name: "Yesterday"}, {id: 2, name: "second song"}], favourite: null }

const albumReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_AN_ALBUM":
            const newAlbum = action.payload
            return { ...state, all: [ ...state.all, newAlbum ] };
        case "DELETE_AN_ALBUM":
            const newAll = state.all.filter(album => album.name !== action.payload.name); 
            return { ...state, all: newAll }; 
        default:
            return state;
    }
}

export default albumReducer
