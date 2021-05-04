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
                width: `calc(100% * ${status[0]}/255)`,
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
                width: `calc(100% * ${status[1]}/255)`,
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
                width: `calc(100% * ${status[2]}/255)`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>sp-atk</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `calc(100% * ${status[3]}/255)`,
              }}
            ></span>
          ) : (
            <span></span>
          )}
        </div>
        <div className="xp">
          <p>sp-def</p>
          <span className="base"></span>
          {status !== undefined ? (
            <span
              className="base-current"
              style={{
                width: `calc(100% * ${status[4]}/255)`,
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
                width: `calc(100% * ${status[5]}/255)`,
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
