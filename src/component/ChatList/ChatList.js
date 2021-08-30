import React from 'react'
import ChatPerson from '../ChatPerson/ChatPerson'
import PersonList from '../PersonList/PersonList'
import Recent from '../Recent/Recent'
import Search from '../Search/Search'
import './ChatList.css'
const ChatList = () => {
    return (
       
        <div className='chat_list'>
            
        <PersonList />
            {/* <Recent /> */}
            
        </div>
        
    )
}

export default ChatList
