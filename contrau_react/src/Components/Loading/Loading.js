import React from "react";
import RingLoader from "react-spinners/RingLoader";
import LoadingTextAimation from "./LoadingTextAnimation";

export default function Loading() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-5">
          <RingLoader color="#000000" loading speedMultiplier={1} size={200} />
          <LoadingTextAimation />
        </div>
      </div>
    </div>
  );
}
