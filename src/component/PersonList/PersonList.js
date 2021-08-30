import React from 'react'
import './PersonList.css'
import persons from './PersonData.js'
import Person from '../Person/Person'
const PersonList = () => {
    return (
        <div>
            {persons.map(person => {
                console.log(person);
               return <Person key={person.id} person={person} />
            })}
        </div>
    )
}

export default PersonList
