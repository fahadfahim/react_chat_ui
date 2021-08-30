import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import './Person.css'
import per from '../../asset/jak.jpg'

const Person = ({person}) => {
    const {name,img,message,date,unread} = person;
    console.log(person);
    return (
        <IconButton className='recent_chat'>          
            <div className='person_avatar'>
                <Avatar src={img} />
            </div>
            <div className='person_det'>
                <h4>{name}</h4>
                <p>{message}</p>
            </div>
            <div className='person_icon'>
                <p>{date}</p>
                <span className='badge'>{unread}</span>
            </div>
        </IconButton>
    )
}

export default Person
