
import React from 'react'
import ChatContent from '../ChatContent/ChatContent'
import ChatList from '../ChatList/ChatList'
import ChatPerson from '../ChatPerson/ChatPerson'
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className="recent-contact">
            <ChatPerson />
            <Search />
            <ChatList />
            </div>
            <ChatContent />
            <UserProfile />
        </div>
    )
}

export default Home
