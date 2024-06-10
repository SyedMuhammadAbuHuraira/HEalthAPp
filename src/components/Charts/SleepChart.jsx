import React from "react";
import ChartComponent from "@/components/ChartComponent/ChartComponent";

const SleepChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sleep Hours",
        data: [7, 8, 6, 7, 9, 8, 7],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default SleepChart;
