import React from "react";
import DashboardWrapper from "../DashboardWrapper/DashboardWrapper";
import CardComp from "../Card/Card";
import LineChart from "../Charts/LineChart";
import HeartRateChart from "@/components/Charts/HeartRateChart";
import GlucoseLevelChart from "../Charts/GlucoseLevelChart";
import CaloriesBurnedChart from "../Charts/CaloriesBurnedChart";
import RespiratoryBioMarkersChart from "../Charts/RepositoryBioMakersChart";
import SleepChart from "../Charts/SleepChart";
import StepCountChart from "../Charts/StepCountChart";
import BloodOxygenChart from "../Charts/BloodOxygen";
import { notesByUser } from "@/constants";
import { Avatar } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Steps from "../Steps/Steps";


const Dashboard = () => {
  const TopComponents = () => {
    return (
      <div className="flex flex-wrap justify-between  w-[75%] ml-20">
        <div className="flex flex-col w-[30%]">
          <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 ">
            <h1 className="heading font-semibold mb-2">Heart</h1>
            <div className="mb-10 ">
              <CardComp title="Rate" ChartComponent={<HeartRateChart />} Bottom={<div className="flex items-center gap-2"> <div className="bg-[#f5f5f5] w-14 h-14 rounded-full"><HeartFilled className="text-3xl text-red-900 p-3"/></div> <div className="flex gap-1 items-center"><h1 className="heading font-semibold">65</h1><h2>RPM</h2></div></div>}/>
            </div>
            <CardComp title="Heart" ChartComponent={<HeartRateChart />} />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[65%]">
          <div className=" rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 w-[100%]">
            <CardComp title="Glucose" ChartComponent={<GlucoseLevelChart />} />
          </div>
          <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 ">
            <CardComp
              title="Calories"
              ChartComponent={<CaloriesBurnedChart />}
            />
          </div>
        </div>
      </div>
    );
  };
  const MiddleComponents = () => {
    return (
      <div className="flex flex-wrap justify-between  w-[75%] ml-20">
        <div className="flex flex-col gap-3 w-[65%]">
          <div className=" rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 w-[100%]">
            <CardComp
              title="RespiratoryBioMarkers"
              ChartComponent={<RespiratoryBioMarkersChart />}
            />
          </div>
          <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 ">
            <CardComp title="Sleep" ChartComponent={<SleepChart />} />
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4">
            <div className="mb-10">
              
             <Steps/>
            </div>
            <div>
              <CardComp title="" ChartComponent={<StepCountChart />} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const BottomComponent = () => {
    return (
      <div className="flex flex-wrap justify-between  w-[75%] ml-20">
        <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 w-[50%]">
          <CardComp
            title="Blood Oxyegen"
            ChartComponent={<BloodOxygenChart />}
          />
        </div>
        <div className="rounded-2xl shadow-2xl  bg-[#f5f5f5] p-4 w-[45%] ">
          <div>
            <h1 className="heading">Notes</h1>
            {notesByUser.map((note) => (
              <div key={note.id} className="bg-white p-4 rounded-xl mt-4 flex gap-2">
                <Avatar src={note.img}  />
                <div>
                  <h1 className="text-base font-bold">{note.userName}</h1>
                  <p className="text-sm">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <DashboardWrapper
        TopComponents={TopComponents()}
        MiddleComponent={MiddleComponents()}
        BottomComponent={BottomComponent()}
      />
    </div>
  );
};

export default Dashboard;
