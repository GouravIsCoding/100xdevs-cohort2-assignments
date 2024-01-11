import React from 'react';

export default React.forwardRef(function Input(
  { label, id, placeholder = 'input', ...props },
  ref
) {
  return (
    <>
      <div className="py-3 mx-2">
        <label
          htmlFor={id}
          className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          placeholder={placeholder}
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id={id}
          {...props}
          ref={ref}
        />
      </div>
    </>
  );
});
