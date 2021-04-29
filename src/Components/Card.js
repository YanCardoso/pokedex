import React, { useEffect, useState } from "react";
import "./Card.css";
import Avatar from "./Avatar";
import Status from "./Status";
import Type from "./Type";

function Card({ avatar, name, id, type }) {
  const [typeOn, setTypeOn] = useState(false);

  useEffect(() => {
    if (type !== undefined) {
      setTypeOn(true);
    }
  }, [type]);

  if (typeOn) {
    return (
      <div
        className="card--container"
        style={{
          background: `linear-gradient(to top, var(--${type[0]}), var(--${type[0]}-sh) )`,
        }}
      >
        <Type type={type} />
        <Avatar avatar={avatar} name={name} id={id} />
        <Status />
      </div>
    );
  } else {
    return (
      <div
        className="card--container"
        style={{
          background: `linear-gradient(to top, var(--${type}), var(--${type}-sh) )`,
        }}
      >
        <Type type={type} />
        <Avatar avatar={avatar} name={name} id={id} />
        <Status />
      </div>
    );
  }
}

export default Card;
