import React from 'react';
import './Person.css'

const person = (props) => {
    return (
    <div className='Person'>
    <h1><p>I'm {props.name} and I am {props.age} 
    years old</p>
    </h1>
    <p>{props.children}</p>
    
    <input type="text" onChange = {props.changed} />
    </div>
    )
};

export default person;