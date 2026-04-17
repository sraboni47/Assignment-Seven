import React from "react";
import Footer from "../../components/shared/navbar/footer/Footer";

const Workpage = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 py-8 bg-gray-100 min-h-screen">
        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            {/* PROFILE CARD */}
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/images/2.png"
                alt="profile"
                className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
              />

              <h2 className="font-semibold text-black text-lg">Emma Wilson</h2>

              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs mt-2 inline-block">
                Overdue
              </span>

              <div className="mt-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  FAMILY
                </span>
              </div>

              <p className="text-gray-500 mt-4 italic text-sm">
                "Former colleague, great mentor"
              </p>

              <p className="text-gray-400 text-sm mt-2">Preferred: email</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-3">
              <button className="bg-white p-4 rounded-xl shadow text-black flex items-center gap-2">
                <img src="/images/BellSimpleZ.png" alt="" className="w-4 h-4" />
                Snooze 2 weeks
              </button>

              <button className="bg-white p-4 rounded-xl shadow text-black flex items-center gap-2">
                <img src="/images/Archive.png" alt="" className="w-4 h-4" />
                Archive
              </button>

              <button className="bg-white p-4 rounded-xl shadow text-red-500 flex items-center gap-2">
                <img src="/images/Trash.png" alt="" className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-2xl font-bold text-[#244D3F]">62</h2>
                <p className="text-gray-500 text-sm">Days Since Contact</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-2xl font-bold text-[#244D3F]">30</h2>
                <p className="text-gray-500 text-sm">Goal (Days)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center col-span-2 md:col-span-1">
                <h2 className="text-lg font-bold text-[#244D3F]">
                  Feb 27, 2026
                </h2>
                <p className="text-gray-500 text-sm">Next Due</p>
              </div>
            </div>

            {/* RELATIONSHIP GOAL */}
            <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg mb-1 text-[#244D3F]">
                  Relationship Goal
                </h3>
                <p className="text-gray-500">
                  Connect every <span className="font-bold text-black">30 days</span>
                </p>
              </div>

              <button className="border border-gray-300 px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                Edit
              </button>
            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4 text-black text-xl">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <button className="bg-gray-100 p-6 rounded-xl flex flex-col items-center gap-2 text-black">
                  <img src="/images/PhoneCall.png" />
                  Call
                </button>

                <button className="bg-gray-100 p-6 rounded-xl flex flex-col items-center gap-2 text-black">
                  <img src="/images/message.png"  />
                  Text
                </button>

                <button className="bg-gray-100 p-6 rounded-xl flex flex-col items-center gap-2 text-black">
                  <img src="/images/VideoCamera.png"  />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workpage;
