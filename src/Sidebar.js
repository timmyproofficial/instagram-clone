import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <div className="siderbar__headerUserInfo"> */}
                
                    <img src="img/timmy.jpg" />
                
                <div className="sidebar__headerUsername">
                    <h4>timmyproofficail</h4>
                    <span>AYANLOLA BAYO TIMILEYIN</span>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Sidebar
