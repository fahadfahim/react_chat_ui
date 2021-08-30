import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import fad from '../../asset/fad.jpg'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile_avatar'>
                <Avatar src={fad} className='pro_avatar' />
                <div className='pro_about'>
                    <h4>Fahad Fahim</h4>
                    <p>Junior Developer</p>
                </div>
            </div>
            <div className='start_call'>
                <div className='call_btn'>
                <IconButton className='btn'>
                    <ChatBubbleIcon className='icon'/>
                </IconButton>
                <p>Start Chat</p>
                </div>
               <div className='call_btn'>
               <IconButton className='btn'>
                    <VideocamIcon className='icon'/>
                </IconButton>
                <p>Start Video</p>
               </div>
            </div>
            <div className='friends_fav'>
                <div className='ff_area'>
                    <IconButton>
                    <PersonOutlineSharpIcon />
                    </IconButton>
                    <p>View Friend</p>
                </div>
                <div className='ff_area'>
                    <IconButton>
                    <FavoriteBorderSharpIcon />
                    </IconButton>
                    <p>Add to Favorite</p>
                </div>
            </div>
            <div className='attacment'>
                <div className='att_text'>
                    <p>Attatchment</p>
                </div>
                <div className='att_box'>
                    <IconButton className='box'>
                        <p>PDF</p>
                    </IconButton>
                    <IconButton className='box'>
                    <p>Video</p>
                    </IconButton>
                    <IconButton className='box'>
                    <p>Mp3</p>
                    </IconButton>
                    <IconButton className='box'>
                    <p>Image</p>
                    </IconButton>
                </div>
                <div className='view_all'>
                    <IconButton className='view_all_btn'>
                        <p>view all</p>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Profile
