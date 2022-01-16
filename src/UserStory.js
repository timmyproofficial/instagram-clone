import React from 'react'
import './UserStory.css'

function UserStory({image, text}) {
    return (
        <div className="userStory">
            <img src={image} /><br />
            <small>{text}</small>
        </div>
    )
}

export default UserStory
