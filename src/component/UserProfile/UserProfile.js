import React from 'react'
import './UserProfile.css'
import Search from '../Search/Search'
import Profile from '../Profile/Profile'
const UserProfile = () => {
    return (
        <div className="user_profile">
            <Search />
            <Profile />
        </div>
    )
}

export default UserProfile
