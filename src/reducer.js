export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    currentPlaylist: null,
    currentTrack: null,
    playElement: null,
    // todo: REMOVE after finished developing..
    // token:'BQCPzfAR9A4pirsemNlZnVFATELinnKrJwJOidQLt4qSQHUy6WiRoFMLuYYXkcsGGTMXU1_iT50A8yVrj49dzW1X8X2iVSGBdhAjYLo32Uoz5yGYZFr-Yx1NiOtx8yTMQVbsClOIDmCcFz3Mqq4_NyYD24_l8M7LF_MV2DEXujFyTwtC',
};

const reducer = (state, action) => {

    // Action => type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, // spread previous state => immutable data.
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                currentPlaylist: action.currentPlaylist,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                currentTrack: action.currentTrack,
            }

        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }

        case 'SET_PLAY_ELEMENT':
            return {
                ...state,
                playElement: action.playElement
            }
        default:
            return state;
    }
}

export default reducer;
