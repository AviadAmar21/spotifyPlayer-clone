import React, {useRef} from 'react';
import './SongRow.css'
import {useDataLayerValue} from "./DataLayer";

const SongRow = ({track}) => {

    const [{currentTrack, playing, playElement}, dispatch] = useDataLayerValue();
    const audioEl = useRef();

    const playSong = () => {
        const audio = audioEl.current;

        if (playing){
            playElement.pause();
        }

        dispatch({
            type: 'SET_CURRENT_TRACK',
            currentTrack: track
        })

        dispatch({
            type: 'SET_PLAY_ELEMENT',
            playElement: audio
        })

        if (!playing) {
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
            audio.play();
        } else {
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            })
            audio.pause();
        }

    }

    // const pause = async () => {
    //     dispatch({
    //         type: 'SET_PLAYING',
    //         playing: false
    //     })
    //     await audioEl.pause()
    // }

    return (
        <div className="songRow" onClick={playSong}>
            <img className="songRow_album" src={track.album.images[0].url} alt=""/>
            <div className="songRow_info">
                <audio ref={audioEl} src={track.preview_url}/>
                <h4 >{track.name}</h4>
                <p>
                    {track.artists.map((artist) => artist.name).join(', ')} -{' '}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;
