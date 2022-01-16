import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerProfile">
                    <div className="post__headerUserInfo">
                        <div className="post__headerAvatar">
                            <Avatar src="img/user-6.jpg" />
                        </div>
                        <div className="post__headerUsername">
                            <h4>niola_jeff</h4>
                            <span>West Califonia</span>
                        </div>
                    </div>
                    <div className="post__headerMoreIcon">
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
            <img src="img/timmy.jpg" />
            <div className="post__footer">
                <div>
                    <div className="post__footerActionIcon">
                        <FavoriteBorderIcon />
                        <ChatBubbleOutlineIcon />
                        <SendIcon />
                    </div>
                    <div className="post__footerBookmark">
                        <BookmarkBorderIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
