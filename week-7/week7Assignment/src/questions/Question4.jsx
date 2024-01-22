import React from "react";
import { useMemo } from "react";
import { useState, useRef } from "react";

export default function Question3(props) {
  const randomWords = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "elephant",
    "giraffe",
    "zebra",
    "lion",
    "tiger",
    "mountain",
    "river",
    "ocean",
    "forest",
    "desert",
    "programming",
    "javascript",
    "react",
    "node",
    "database",
    "coffee",
    "tea",
    "pizza",
    "burger",
    "pasta",
    "happy",
    "sad",
    "excited",
    "relaxed",
    "energetic",
  ];
  const [para, setPara] = useState("");
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const generate = useMemo(() => {
    const num = input;
    let temp = "";
    for (let i = 0; i < num; i++) {
      temp += randomWords[Math.floor(Math.random() * randomWords.length)] + " ";
    }
    setPara(() => temp);
  }, [input]);
  return (
    <>
      <div className="mx-10 text-center">
        <div className="w-1/3 text-center">
          <input
            type="text"
            id="small-input"
            ref={inputRef}
            className="inline-block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Number of words"
          />
          <button
            onClick={() =>
              setInput(() => {
                return Number(inputRef.current.value);
              })
            }
            className="button outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black"
          >
            Generate
          </button>
        </div>
        <div className="border-blue-950 m-4 p-3">
          <p>{para}</p>
        </div>
      </div>
    </>
  );
}
