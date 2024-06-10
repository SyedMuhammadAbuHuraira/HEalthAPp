import React from "react";
import ChartComponent from "@/components/ChartComponent/ChartComponent";

const BloodOxygenChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Blood Oxygen",
        data: [98, 97, 99, 96, 98, 97],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
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

export default BloodOxygenChart;
