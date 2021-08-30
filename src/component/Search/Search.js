import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <div className='search'>
            <div className='sidebar__searchContainer'>
            <SearchOutlined />
            <input placeholder='Search or start new chat' />
            </div>
        </div>
    )
}

export default Search
