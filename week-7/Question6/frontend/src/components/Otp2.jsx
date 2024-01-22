import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { confirmOtp } from "../backend";

export default function Otp2(props) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const { email } = state;
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input box (if available)
    if (index < refs.length - 1 && value !== "") {
      refs[index + 1].current.focus();
    }
  };
  const onSubmit = async () => {
    const totalOtp = otp.join("");
    console.log(totalOtp);
    if (totalOtp.length === 4) {
      const { error, message } = await confirmOtp(totalOtp, email);
      if (error) {
        return setError(error);
      } else if (message) {
        navigate("/loggedin", { state: { message } });
      }
    }
  };
  const handleKeyDown = (index, event) => {
    // Move focus to the previous input box on backspace
    if (index > 0 && event.key === "Backspace" && otp[index] === "") {
      refs[index - 1].current.focus();
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>

          <p>{state && state.message}</p>
          <div className="flex gap-4">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={refs[index]}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-4xl border border-gray-300 rounded focus:outline-none text-center py-2"
              />
            ))}
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={onSubmit}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
