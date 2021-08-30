import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './ChatPerson.css'
import jak from '../../asset/jak.jpg'
import EditIcon from '@material-ui/icons/Edit';
const ChatPerson = () => {
    return (
        <div className='chat_person'>
            <div className='chat_ava'>
                <Avatar src={jak}/>
            </div>
            <div className='person_det'>
                <h4>Jakaria Parvez Jehad</h4>
                <p>Senior fullstack developer</p>
            </div>
            <div className='chat_icon'>
                <IconButton>

                <EditIcon className='icon'/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatPerson
