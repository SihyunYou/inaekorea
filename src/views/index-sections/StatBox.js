import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { generateGreenGradient } from "../utils/Color.js";

const greenColors = generateGreenGradient(4);

export function StatBox({ imgSrc, end, suffix, label, duration = 2, styleOption = 0, style={}, color }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || isVisible) return;
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isInView) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const boxStyle =
    styleOption === 1
      ? { aspectRatio: "1 / 1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }
      : { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };

  return (
    <motion.div
      className="box-no-border"
      ref={ref}
      initial={{ scale: 0.8, opacity: 0.2 }}
      animate={isVisible ? { scale: 1.1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundColor: color || "#00A86A", // idx 기반 색상 적용
        borderRadius: "12px",
        textAlign: "center",
        padding: "16px",
        ...boxStyle,
        ...style,
      }}
    >
      <img src={imgSrc} style={{ width: styleOption === 1 ? "60%" : "80%", marginBottom: "10px" }} />
      {styleOption === 0 && (
        <h6 style={{ fontWeight: "900", color: "white", margin: "8px 0" }}>
          <CountUp end={end} duration={duration} suffix={suffix} separator="," />
        </h6>
      )}
      <h6 style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: label }} />
    </motion.div>
  );
}

export function StatBoxes({ statsData, styleOption = 0 }) {
  const dataToRender = styleOption === 1 ? statsData.slice(0, 4) : statsData;
  const colMd = styleOption === 1 ? 4 : 3;

  // generate gradient based on data length
  const greenColors = generateGreenGradient(dataToRender.length);

  return (
    <Row>
      {dataToRender.map((stat, index) => (
        <Col key={index} xs="12" md={colMd} style={{ padding: "0 1%" }}>
          <StatBox
            imgSrc={require(`assets/img/${stat.imgSrc}`)}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
            duration={stat.duration}
            styleOption={styleOption}
            style={{ width: "88%", margin: "4vh auto" }}
            color={greenColors[index]} // idx 기반 색상 전달
          />
        </Col>
      ))}
    </Row>
  );
}