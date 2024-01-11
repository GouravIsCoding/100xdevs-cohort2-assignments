import React from 'react';

export default function Button({ type = 'submit', name, ...props }) {
  return (
    <>
      <button
        type={type}
        className="inline-flex items-center mx-2 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        {...props}
      >
        {name}
      </button>
    </>
  );
}
