import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function DoughnutChartComponent({ backgroundColor, borderColor, labels, label, data }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: label,
              data: data || [300, 50, 100],
              backgroundColor: backgroundColor || ["#FF6384", "#36A2EB", "#FFCE56"],
              borderColor: borderColor || ["#FF6384", "#36A2EB", "#FFCE56"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [backgroundColor, borderColor, labels, label, data]);

  return <canvas ref={chartRef} width={100} height={50}></canvas>;
}
