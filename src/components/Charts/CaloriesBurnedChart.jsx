import React from "react";
import ChartComponent from "@/components/ChartComponent/ChartComponent";

const CaloriesBurnedChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Calories Burned",
        data: [1200, 1300, 400, 580, 890, 720, 1800],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red
        borderColor: "rgba(255, 99, 132, 1)", // Red
        borderWidth: 1,
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Red for points
        fill: false,
      },
      {
        label: "Calories Consumed",
        data: [2000, 2100, 2200, 2300, 2400, 2500, 2600], // Example data for calories consumed
        backgroundColor: "rgba(135, 206, 235, 0.2)", // Light sky blue
        borderColor: "rgba(135, 206, 235, 1)", // Sky blue
        borderWidth: 1,
        pointBackgroundColor: "rgba(135, 206, 235, 1)", // Sky blue for points
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
    maintainAspectRatio: false,
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default CaloriesBurnedChart;
