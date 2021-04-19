import React from 'react';
import './Card.css'
import Avatar from './Avatar'
import Status from './Status';
import Type from './Type';

function Card({avatar, name, id, type}) {
    return (
        <div className="card--container">
            <Type  type={type}/>
            <Avatar avatar={avatar} name={name} id={id}/>
            <Status  />
        </div>
    )
}

export default Card;
