import React from "react";

const timelineData = [
  { type: "meet", name: "Tom Baker", date: "March 29, 2026" },
  { type: "text", name: "Sarah Chen", date: "March 28, 2026" },
  { type: "meet", name: "Olivia Martinez", date: "March 26, 2026" },
  { type: "video", name: "Aisha Patel", date: "March 23, 2026" },
  { type: "meet", name: "Sarah Chen", date: "March 21, 2026" },
  { type: "call", name: "Marcus Johnson", date: "March 19, 2026" },
  { type: "meet", name: "Aisha Patel", date: "March 17, 2026" },
  { type: "text", name: "Olivia Martinez", date: "March 13, 2026" },
  { type: "call", name: "Lisa Nakamura", date: "March 11, 2026" },
  { type: "call", name: "Sarah Chen", date: "March 11, 2026" },
  { type: "video", name: "Marcus Johnson", date: "March 6, 2026" },
  { type: "video", name: "Ryan O'Brien", date: "February 24, 2026" },
];

const Timeline = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 bg-gray-100 min-h-screen">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-black">Timeline</h1>

      {/* FILTER */}
     <div className="mb-6">
  <div className="relative inline-block">

    <select className="appearance-none bg-white border px-4 py-2 pr-10 rounded-lg text-gray-600 shadow-sm outline-none">
      <option>Filter timeline</option>
    </select>

    {/* custom arrow */}
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src="/images/arrow.png" alt="" />
    </div>

  </div>
</div>

      {/* LIST */}
      <div className="space-y-4">
        {timelineData.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
              {item.type === "meet" && (
                <img src="/images/hand.png" className="w-6 h-6" />
              )}
              {item.type === "text" && (
                <img src="/images/text.png" className="w-6 h-6" />
              )}
              {item.type === "call" && (
                <img src="/images/call.png" className="w-6 h-6" />
              )}
              {item.type === "video" && (
                <img src="/images/video.png" className="w-6 h-6" />
              )}
            </div>

            {/* TEXT */}
            <div>
              <p className="font-medium text-gray-800">
                {item.type === "meet" && "Meetup"}
                {item.type === "text" && "Text"}
                {item.type === "call" && "Call"}
                {item.type === "video" && "Video"}{" "}
                <span className="text-gray-500">with {item.name}</span>
              </p>

              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
