import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RespiratoryBioMarkersChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: Array.from({ length: 30 }, (_, i) => i + 1),
          datasets: [
            {
              label: "Respiratory BioMarkers",
              data: Array.from(
                { length: 30 },
                () => Math.floor(Math.random() * 20) + 80
              ),
              backgroundColor: "##cc1647",
              borderColor: "#cc1647",
              borderWidth: 1,
              fill: true,
              barThickness: 8, // Set bar border width
              borderRadius: 10, // Set bar border radius

            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      });
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};
export default RespiratoryBioMarkersChart;
