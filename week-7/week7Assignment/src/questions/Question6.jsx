import React from "react";
import Otp1 from "../components/Otp1";
import Otp2 from "../components/Otp2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Question6(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Otp1 />} />
        <Route path="/otp" element={<Otp2 />} />
      </Routes>
    </BrowserRouter>
  );
}
