import React from 'react';

import './Type.css'

function Type({type}){
    return (
        <div className="type--container">
            <img src={`type-pokemon/Pokémon_${type}_Type_Icon.svg`} />
        </div>
    );
}

export default Type;
