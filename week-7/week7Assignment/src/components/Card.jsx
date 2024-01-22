import React from "react";

export default function Card({ svgEl, wish, name }) {
  return (
    <>
      <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md">{svgEl}</div>
        </div>

        <div className="p-5">
          <p>{wish}</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </div>
      </div>
    </>
  );
}
