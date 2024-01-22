import React, { useMemo, useRef, useState } from "react";
import Card from "../components/Card";
import Card1svg from "../assets/card1.svg?react";
import Card2svg from "../assets/card2.svg?react";
import Card3svg from "../assets/card3.svg?react";

export default function Qustions7(props) {
  const inputRef = useRef(null);
  const cardConfig = [
    {
      wish: "happy birthday",
      svgEl: <Card1svg />,
    },
    {
      wish: "Shubho Jonmodin",
      svgEl: <Card2svg />,
    },
    {
      wish: "On this Special day here is a gift",
      svgEl: <Card3svg />,
    },
  ];
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  const onSubmit = () => {
    const inputValue = inputRef.current.value;
    setName(() => inputValue);
  };
  const fillCards = useMemo(() => {
    if (name !== "") {
      setCards(() => {
        return cardConfig.map((c) => {
          return { ...c, name };
        });
      });
    }
  }, [name, setCards]);
  return (
    <>
      <div className="flex items-center justify-center align-middle w-full h-screen bg-black">
        <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-center bg-blue-400 ">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Birthday Wish Cards
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your name
            </label>
            <input
              ref={inputRef}
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Gourav Thakur"
              required
            />
          </div>
          <button
            onClick={onSubmit}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Done
          </button>
        </div>
      </div>
      {cards.length ? (
        <div className="flex items-center justify-center align-middle w-full h-screen bg-black">
          <div className="flex flex-wrap gap-3">
            {cards.map((card) => (
              <Card name={"Gourav"} {...card} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
