import React from "react";
import { Progress } from "antd";
import shoe from "@/assets/shoes.png";
import { stepsData } from "@/constants";
const Steps = () => {
  const twoColors = {
    "0%": "#bc829a",
    "100%": "#6facbc",
  };
  return (
    <div style={{ textAlign: "center" }} className="bg-white p-4 rounded-xl shadow-lg">
      <Progress
        type="circle"
        percent={75}
        format={() => (
          <div>
            <img src={shoe} className="px-20" />
            <h1 className="heading font-semibold">6,320</h1>
            <p className="text-sm">Steps</p>
          </div>
        )}
        size={200}
        strokeColor={twoColors}
        strokeWidth={4}
      />
      <div className="flex  flex-wrap justify-center gap-2 mt-3">
        {stepsData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-5 bg-[#f5f5f5] rounded-xl w-[31%] h-30"
          >
            <div>
              <data.Icon size={18} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{data.title}</h1>
              <p>{data.value}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Steps;

