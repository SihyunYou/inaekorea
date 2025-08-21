import React, { useState, useEffect } from "react";
import InfiniteCarousel from "./InfiniteCarousel.js";

export default function Performance({ images1, images2 }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
      <p style={{ color: '#888', textAlign: 'center', marginTop: '1.5vh' }}>대학교</p>
      <InfiniteCarousel images={images1} />
      <p style={{ color: '#888', textAlign: 'center' }}>파트너사/지자체</p>
      <InfiniteCarousel images={images2} reverse={true} />
    </div>
  );
}
