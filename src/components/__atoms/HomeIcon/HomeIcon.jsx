import React, { useState, useEffect } from "react";

function HomeIcon({ setShow, whiteicon, setWhiteIcon }) {
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (whiteicon === "home") {
      setColor("white");
    } else {
      setColor("#5A698F");
    }
  }, [whiteicon]);

  return (
    <div
      className="h-[20px] cursor-pointer"
      onClick={() => {
        setShow("normal");
        setWhiteIcon("home");
      }}
    >
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default HomeIcon;
