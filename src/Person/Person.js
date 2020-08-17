import React from 'react';


const person = (props) => {
    return (
    <div>
    <h1><p>I'm {props.name} and I am {props.age} 
    years old</p></h1>
    <p>{props.children}</p>
    </div>
    )
};

export default person;