import React from 'react'
import './Story.css'
import UserStory from './UserStory'

function Story() {
    return (
        <div className="story">
            <UserStory image="img/user-1.jpg" text="John Smith" />
            <UserStory image="img/user-4.jpg" text="John Doe" />
            <UserStory image="img/user-6.jpg" text="Rose Mary" />
            <UserStory image="img/user-2.jpg" text="Paul Garnet" />
            <UserStory image="img/user-3.jpg" text="Mark Miler" />
            <UserStory image="img/user-8.jpg" text="Ruth Smith" />
        </div>
    )
}

export default Story
