import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Text", value: 2 },
  { name: "Call", value: 3 },
  { name: "Video", value: 3 },
];

const COLORS = ["#8B5CF6", "#244D3F", "#22C55E"];

const Stats = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">
          By Interaction Type
        </h3>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-8 mt-6 flex-wrap">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></span>

              <span className="text-gray-700">
                {item.name} ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;