import { IconButton } from '@material-ui/core'
import React from 'react'
import './MessageType.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
const MessageType = () => {
    return (
        <div className='message_type'>
        <div className='messagetype_container'>
            <div className='message_left'>
                <IconButton>
                <MicNoneIcon />
                </IconButton>
                <input placeholder='Write something'/>
            </div>
            <div className='message_right'>
                <IconButton>
                    <AttachFileIcon className='attachIcon'/>
                </IconButton>
                <IconButton>
                    <CameraAltIcon />
                </IconButton>
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton className='send'>
                    <SendIcon className='sendIcon' />
                </IconButton>
            </div>
        </div>
        </div>
    )
}

export default MessageType
