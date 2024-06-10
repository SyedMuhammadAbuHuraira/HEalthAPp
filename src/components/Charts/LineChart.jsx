import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart({ backgroundColor, borderColor, labels, label, data }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: label,
              data: data || [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: backgroundColor || "rgba(75, 192, 192, 0.2)",
              borderColor: borderColor || "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: true,
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
            },
          },
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
