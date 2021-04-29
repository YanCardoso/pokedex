import React from "react";

import "./Type.css";

function Type({ type }) {
  if (type !== undefined) {
    return (
      <div className="type--container">
        <img src={`type-pokemon/Pokémon_${type[0]}_Type_Icon.svg`} alt="Tipo" />
        {(type.length > 1) ? <img src={`type-pokemon/Pokémon_${type[1]}_Type_Icon.svg`} alt="Tipo" /> : ''}
        
      </div>
    );
  } else {
    return <div className="type--container"></div>;
  }
}

export default Type;
