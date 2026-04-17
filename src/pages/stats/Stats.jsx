import React from "react";

const Stats = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 bg-gray-100 min-h-screen">
      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Friendship Analytics
      </h1>

      {/* CARD */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
        <h3 className="text-lg font-bold text-gray-800 mb-4 items-start self-start">
          By Interaction Type
        </h3>
        {/* IMAGE */}
        <div className="w-40 h-40 md:w-56 md:h-56">
          <img
            src="/images/image 1.png"
            alt="chart"
            className="w-full h-full object-contain"
          />
        </div>

        {/* LEGEND */}
        <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            Text
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#244D3F] rounded-full"></span>
            Call
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
