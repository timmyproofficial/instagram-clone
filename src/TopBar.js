import React from 'react'
import NavMenuIcon from './NavMenuIcon'
import './TopBar.css'

function TopBar() {
    return (
        <div className="topBar">
            
            <div className="topBar__content">
                {/* Instagram */}
                <h1>Instagram</h1>

                {/* SearchInputFied */}
                <input type="text" placeholder="Search"  className="topBar__content__search" />

                {/* NavMenuIcons */}
                <NavMenuIcon />
            </div>

        </div>
    )
}

export default TopBar
