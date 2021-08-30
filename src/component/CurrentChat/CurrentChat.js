import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react'
import './CurrentChat.css'
import jak from '../../asset/jak.jpg'
const CurrentChat = () => {
    return (
        <>
        <div className='current_chat'>
            <div className='chat_head'>
                <Avatar src={jak} className='avatar' />
                <h4>Jakaria Parvez Zehad</h4>
                <span className='active'></span>
            </div>
            <div className='chat_icon'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
            </div>
        </div>
        <hr></hr>
        </>
    )
}

export default CurrentChat
