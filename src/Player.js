import React from 'react';
import './Player.css'
import SideBar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
};

export default Player;
