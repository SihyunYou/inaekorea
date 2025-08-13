// PieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { generateGreenGradient } from "../utils/Color.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart({ yesCount, noCount }) {
  const data = {
    labels: ["아니오", "네"],
    datasets: [
      {
        data: [noCount, yesCount],
        backgroundColor: ["rgba(0, 168, 108, 0.3)", "#00A86C"], // 초록색 계열로 복원
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#00A86C", // 초록색 툴팁 배경
        titleFont: {
          family: "'Pretendard', sans-serif",
          weight: "bold",
        },
        bodyFont: {
          family: "'Pretendard', sans-serif",
        },
      },
      datalabels: {
        color: "white", // 하얀색으로 복원
        font: {
          family: "'Pretendard', sans-serif",
          weight: "bold",
          size: 30,
        },
        formatter: function (value, context) {
          if (context.dataIndex === 1) {
            return value + "%";
          }
          return "";
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  return (
      <Pie data={data} options={options} />
  );
}
