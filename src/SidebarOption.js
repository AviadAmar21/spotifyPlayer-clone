import React from 'react';
import './SiderbarOption.css'

const SidebarOption = ({ title, Icon, playlist }) => {
    console.log('playlist',playlist)
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
};

export default SidebarOption;
