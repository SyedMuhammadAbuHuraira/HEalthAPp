import React from "react";
import ChartComponent from "@/components/ChartComponent/ChartComponent";

const StepCountChart = () => {
  const data = {
    labels: [
      "July 13",
      "July 14",
      "July 15",
      "July 16",
      "July 17",
      "July 18",
      "July 19",
      "July 20",
      "July 21",
      "July 22",
    ], // Sample days, replace with actual data
    datasets: [
      {
        label: "Steps",
        data: [3800, 4200, 3500, 3900, 4100, 6700, 3200, 1500, 6900, 5100], // Sample steps data for each day
        backgroundColor: function (context) {
          return context.raw < 4000 ? "#bc829a" : "#6facbc"; // Change color based on steps
        },
        borderRadius: 10, // Set bar border radius
        barThickness: 6, // Set bar border width
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: "Steps",
          padding: {
            top: 10,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Days",
          padding: {
            top: 10,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
     className="w-[100%] pr-5 h-[370px]">
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default StepCountChart;
