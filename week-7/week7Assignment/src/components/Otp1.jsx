import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Otp1(props) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [error, setError] = useState(null);
  const onSubmit = () => {
    const value = inputRef.current.value;
    console.log(value);
    if (value === "") {
      setError(() => "Empty field");
    } else {
      setError(() => null);
      navigate("/otp");
    }
  };
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Enter Mobile number to get OTP
          </h2>

          <div className="flex gap-4">
            <input
              ref={inputRef}
              type="text"
              className="text-4xl border border-gray-300 rounded focus:outline-none text-center"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={onSubmit}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send OTP
          </button>
        </div>
      </div>
    </>
  );
}
