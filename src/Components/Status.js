import React from "react";

import "./Status.css";

function Status({ status }) {
  return (
    <div className="status--card">
      <div className="status--graphics">
        <div className="xp">
          <p>hp</p>
          <span className="base"></span>

          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[0]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>

        <div className="xp">
          <p>atk</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[1]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>def</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[2]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>spatk</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[3]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>spdef</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[4]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>spe</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `${status[5]}px`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Status;
