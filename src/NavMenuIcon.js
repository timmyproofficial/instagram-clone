import React from 'react'
import './NavMenuIcon.css'
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function NavMenuIcon() {
    return (
        <div className="navMenuIcon">
            
            <HomeIcon />
            <SendIcon />
            <FavoriteBorderIcon />
            <AccountCircleIcon />

        </div>
    )
}

export default NavMenuIcon
