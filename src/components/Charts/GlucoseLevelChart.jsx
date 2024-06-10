// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const GlucoseLevelChart = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }

//       chartInstanceRef.current = new Chart(chartRef.current, {
//         type: "line",
//         data: {
//           labels: Array.from({ length: 30 }, (_, i) => i + 1),
//           datasets: [
//             {
//               label: "Glucose Level",
//               data: Array.from({ length: 30 }, () =>
//                 Math.floor(Math.random() * 60) + 80
//               ),
//               backgroundColor: "rgba(54, 162, 235, 0.2)",
//               borderColor: "rgba(54, 162, 235, 1)",
//               borderWidth: 1,
//               fill: true,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               display: true,
//             },
//             y: {
//               display: true,
//             },
//           },
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//         },
//       });
//     }

//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }
//     };
//   }, []);

//   return <canvas ref={chartRef}></canvas>;
// };

// export default GlucoseLevelChart;

import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GlucoseLevelChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Weekly Average Glucose",
              data: [45, 55, 69, 71, 167, 210, 257], // Example data
              pointBackgroundColor: (ctx) => {
                const bgData = ctx.chart.data.datasets[0].data;
                return bgData.map((value) =>
                  value < 54
                    ? "red"
                    : value < 70
                    ? "rgba(255, 159, 64, 0.2)"
                    : value <= 180
                    ? "yellow"
                    : value <= 250
                    ? "rgba(255, 206, 86, 0.2)"
                    : "red"
                );
              },
              pointBorderColor: (ctx) => {
                const bgData = ctx.chart.data.datasets[0].data;
                return bgData.map((value) =>
                  value < 54
                    ? "rgba(255, 99, 132, 1)"
                    : value < 70
                    ? "rgba(255, 159, 64, 1)"
                    : value <= 180
                    ? "rgba(75, 192, 192, 1)"
                    : value <= 250
                    ? "rgba(255, 206, 86, 1)"
                    : "rgba(255, 99, 132, 1)"
                );
              },
              borderColor: "rgba(75, 192, 192, 1)", // Line color
              borderWidth: 1,
              pointRadius: 5, // Size of the points
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Day/Date",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "BG (mg/dL)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
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

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default GlucoseLevelChart;
