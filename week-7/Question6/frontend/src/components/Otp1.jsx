import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEmail } from "../backend";
export default function Otp1(props) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [err, setErr] = useState(null);
  const onSubmit = async () => {
    const email = inputRef.current.value;
    console.log(email);
    if (email === "") {
      return setErr(() => "Empty field");
    } else {
      console.log(email);
      setErr(() => null);
      const { error, message } = await postEmail(email);
      if (message) {
        return navigate("/otp", { state: { message, email } });
      }
      if (error) {
        return setErr(error);
      }
    }
  };
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Enter email to get OTP
          </h2>

          <div className="flex gap-4">
            <input
              ref={inputRef}
              type="email"
              className="text-4xl border border-gray-300 rounded focus:outline-none text-center"
            />
          </div>
          {err && <p className="text-red-500">{err}</p>}

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
