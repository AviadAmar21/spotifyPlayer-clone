import React from 'react';
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {useDataLayerValue} from "./DataLayer";


const Footer = () => {
    const [{currentTrack, playing, playElement}, dispatch] = useDataLayerValue();
    // console.log('current',currentTrack)

    const play = () => {
        if (!playing) {
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }
        playElement?.play();
    }

    const pause = () => {
        if (playing) {
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            })
        }
        playElement?.pause();
    }

    return (
    <div className="footer">
        {!currentTrack?
            <div className="footer_left">
                    <img
                        className="footer_albumLogo"
                        src='https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg'
                        alt=''
                    />
                    <div className="footer_songInfo">
                        <h4>Yeah!</h4>
                        <p>Usher</p>
                    </div>

            </div> : <div className="footer_left">
                <img
                    className="footer_albumLogo"
                    src={currentTrack.album.images[0].url}
                    alt=''
                />
                <div className="footer_songInfo">
                    <h4>{currentTrack.name}</h4>
                    <p>
                        {currentTrack.artists.map((artist) => artist.name).join(', ')}
                    </p>
                </div>

            </div>
            }
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                { !playing ?
                    <PlayCircleOutlineIcon fontSize="large" className="footer_icon" onClick={play}
                    /> : <PauseCircleOutlineIcon fontSize="large" className="footer_icon" onClick={pause}/>
                }
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
