"use client";
import React, { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 border-gray-800 hover:bg-gray-300 bg-gray-200 px-4 py-2 rounded-3xl"
      >
        count is {count}
      </button>
    </>
  );
}
