import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatBox({ imgSrc, end, suffix, label, duration = 2 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || isVisible) return;

      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <motion.div
      className="box-no-border"
      style={{ backgroundColor: "#00A86A", marginTop: '2.5vh', borderRadius: '12px' }}
      ref={ref}
      initial={{ scale: 0.8, opacity: 0.2 }}
      animate={isVisible ? { scale: 1.1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={imgSrc} style={{ width: "80%" }} />
      <h6 style={{ fontWeight: "900", color: 'white', margin: '8px 0' }}>
        {isVisible ? (
          <CountUp end={end} duration={duration} suffix={suffix} separator="," />
        ) : (
          "0"
        )}
      </h6>
      <h6 style={{ color: 'white' }}>
        {label}
      </h6>
    </motion.div>
  );
}