import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Loggedin(props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (state) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <div>
          <p className="text-green-600 font-bold mb-4">{state.message}</p>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
}
