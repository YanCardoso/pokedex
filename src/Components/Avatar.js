import React from "react";

import "./Avatar.css";

function Avatar({ avatar, name, id }) {

  const n = name;
  return (
    <div className="avatar--card">
      <img src={avatar} />
      <div className="avatar--name">
        <div className="avatar--number">
          <img src="pokeIcon.png" />
          <p>{`#${id}`}</p>
        </div>
        <p>{name !== undefined ? name.toUpperCase() : '...'}</p>
      </div>
    </div>
  );
}

export default Avatar;
