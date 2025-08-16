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
    <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
      <InfiniteCarousel images={images1} />
      <InfiniteCarousel images={images2} reverse={true} />
    </div>
  );
}
