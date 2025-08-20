import React from 'react';

export default function Initialoader() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: 'bg-gradient-to-r from-[#004e92] to-[#000428] ',
      }}
    >
     <span className="loading loading-infinity loading-xl w-[230px] md:w-[350px] lg:w-[400px]    h-[230px] md:h-[350px] lg:h-[400px] text-cyan-300"></span>

    </div>
  );
}
