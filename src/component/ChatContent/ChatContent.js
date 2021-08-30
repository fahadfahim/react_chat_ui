import React from 'react'
import CurrentChat from '../CurrentChat/CurrentChat'
import Messages from '../Message/Message'
import MessageType from '../MessageType/MessageType'
import './ChatContent.css'
const ChatContent = () => {
    return (
        <div className="chat_cnt">
            <CurrentChat />
            <div className='message_area'>

            <Messages />
            </div>
            <MessageType />
        </div>
    )
}

export default ChatContent
