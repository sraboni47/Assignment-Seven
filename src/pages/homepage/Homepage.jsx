import React from "react";
import { Link } from "react-router";

const Homepage = () => {
  const friends = [
    {
      name: "David Kim",
      img: "/images/1.png",
      status: "Almost Due",
      tags: ["WORK"],
    },
    {
      name: "Emma Wilson",
      img: "/images/2.png",
      status: "Overdue",
      tags: ["FAMILY"],
    },
    {
      name: "Lisa Nakamura",
      img: "/images/3.png",
      status: "Overdue",
      tags: ["WORK"],
    },
    {
      name: "James Wright",
      img: "/images/4.png",
      status: "Overdue",
      tags: ["HOBBY", "TRAVEL"],
    },

    {
      name: "David Kim",
      img: "/images/5.png",
      status: "Overdue",
      tags: ["WORK"],
    },
    {
      name: "Emma Wilson",
      img: "/images/6.png",
      status: "On-Track",
      tags: ["FAMILY"],
    },
    {
      name: "Lisa Nakamura",
      img: "/images/7.png",
      status: "On-Track",
      tags: ["WORK"],
    },
    {
      name: "James Wright",
      img: "/images/8.png",
      status: "Almost Due",
      tags: ["HOBBY", "TRAVEL"],
    },

    {
      name: "David Kim",
      img: "/images/9.png",
      status: "Almost Due",
      tags: ["WORK"],
    },
    {
      name: "Emma Wilson",
      img: "/images/10.png",
      status: "Overdue",
      tags: ["FAMILY"],
    },
    {
      name: "Lisa Nakamura",
      img: "/images/11.png",
      status: "Overdue",
      tags: ["WORK"],
    },
    {
      name: "James Wright",
      img: "/images/12.png",
      status: "On-Track",
      tags: ["HOBBY", "TRAVEL"],
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 bg-gray-100 min-h-screen font-geist text-black">
      {/* TOP SECTION */}
      <div className="text-center mb-10 bg-white p-6 sm:p-8 md:p-10 shadow rounded-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] text-white px-5 py-2 rounded-md">
          + Add a Friend
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {[
          { title: "Total Friends", value: 10 },
          { title: "On Track", value: 3 },
          { title: "Need Attention", value: 6 },
          { title: "Interactions This Month", value: 12 },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl text-center shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-[#244D3F]">
              {item.value}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* FRIENDS */}
      <h2 className="text-lg sm:text-xl font-semibold mb-5">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {friends.map((friend, i) => (
          <Link to="/workpage" key={i}>
            <div className="bg-white rounded-xl shadow p-5 text-center cursor-pointer hover:shadow-lg transition">
              <img
                src={friend.img}
                alt="friend"
                className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
              />

              <h3 className="font-semibold text-sm sm:text-base">
                {friend.name}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mb-2">62d ago</p>

              {/* TAGS */}
              <div className="flex justify-center gap-2 flex-wrap mb-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* STATUS */}
              <div className="mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    friend.status === "Overdue"
                      ? "bg-red-500 text-white"
                      : friend.status === "Almost Due"
                        ? "bg-yellow-400 text-black"
                        : "bg-green-600 text-white"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
