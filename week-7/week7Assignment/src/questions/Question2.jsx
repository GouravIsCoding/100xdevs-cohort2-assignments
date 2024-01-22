import React from "react";
import { useState } from "react";

export default function Question2(props) {
  const [color, setColor] = useState("white");
  const buttonsColor = ["red", "cyan", "black", "gray", "green"];
  const colorSetter = (e) => {
    const element = e.currentTarget.closest(".button");
    const bgcolor = element.getAttribute("colortochange");
    console.log(bgcolor);
    setColor(() => bgcolor);
  };
  return (
    <>
      <div
        className={`w-full h-screen duration-300 `}
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {buttonsColor.map((buttonColor) => (
              <button
                colortochange={buttonColor}
                className={`button outline-none px-4 py-1 rounded-full text-white shadow-lg`}
                style={{ backgroundColor: buttonColor }}
                onClick={colorSetter}
              >
                {buttonColor}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
