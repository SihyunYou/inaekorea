import React, { useState, useEffect } from "react";
import InfiniteCarousel from "./InfiniteCarousel.js";
import HurricaneChart from "./HurricaneChart.js";
import PieChart from "./PieChart.js";

export default function Performance({ images }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
      <InfiniteCarousel images={images} />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "flex-start",
          gap: isMobile ? "3vh" : "1vw",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6 style={{ marginBottom: "25px" }}>참여 대학</h6>
          <HurricaneChart
            labels={["24-1학기", "24-2학기", "25-1학기", "25-2학기"]}
            values={[1, 2, 4, 7]}
          />
        </div>
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6 style={{ marginBottom: "25px" }}>재계약률</h6>
    <div style={{ display: "flex", justifyContent: "center", width: "80%" }}>
          <PieChart yesCount={80} noCount={20} />
    </div>
        </div>
      </div>
    </div>
  );
}
