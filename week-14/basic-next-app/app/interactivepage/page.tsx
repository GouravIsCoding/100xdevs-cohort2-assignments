import CountButton from "@/components/CountButton";
import React from "react";

export default function InteractivePage() {
  return (
    <>
      <div className="text-left bg-white rounded-xl p-5">
        <h1 className="font-sans font-bold text-2xl my-4">
          Welcome to Interactive page!
        </h1>
        <div className="w-96">
          <p>
            This route features a count button that demonstrates the power of
            client-side interactivity in Next.js. Click the button and see the
            count go up! This interactive feature is powered by the "use client"
            directive in Next.js, which allows this component to be rendered on
            the client-side.
          </p>
          <br />
          <CountButton />
        </div>
      </div>
    </>
  );
}
