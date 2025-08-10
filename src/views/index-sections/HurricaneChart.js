import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function HurricaneChart({ labels, values }) {
  // 초록색 계열의 투명도 그라데이션 배열 생성 (밝은 연두 -> 진한 초록)
  const baseGreen = [0, 168, 108]; // rgb(0,168,108)
  const minOpacity = 0.4;
  const maxOpacity = 1;
  const steps = values.length;

  const backgroundColors = values.map((_, i) => {
    const opacity = minOpacity + ((maxOpacity - minOpacity) * i) / (steps - 1);
    return `rgba(${baseGreen[0]}, ${baseGreen[1]}, ${baseGreen[2]}, ${opacity.toFixed(2)})`;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "참여 대학",
        data: values,
        backgroundColor: backgroundColors,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    layout: {
      padding: {
        right: 30,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 168, 108, 0.8)", // 진한 초록
        titleFont: {
          family: "'Pretendard', sans-serif",
          weight: "bold",
        },
        bodyFont: {
          family: "'Pretendard', sans-serif",
        },
      },
      datalabels: {
        anchor: "end",
        align: "right",
        clip: false,
        color: "#006b43", // 초록 진한 색 라벨
        font: {
          family: "'Pretendard', sans-serif",
          weight: "bold",
          size: 14,
        },
        formatter: (value) => value,
      },
    },
    scales: {
      x: { display: false },
      y: { grid: { display: false } },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
