import React from 'react';

export default function Initialoader() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: 'linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      }}
    >
      <span className="loading loading-infinity loading-xl w-[180px] h-[180px] spin-animation"></span>
    </div>
  );
}
