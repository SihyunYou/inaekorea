import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { motion } from "framer-motion";
import { generateGreenGradient } from "../utils/Color.js";

const greenColors = generateGreenGradient(3);

function AnimatedCard({ children, bgColor }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || isVisible) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inView) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <Card
        className="h-100 shadow-sm"
        style={{ backgroundColor: bgColor, borderRadius: "50px" }}
      >
        {children}
      </Card>
    </motion.div>
  );
}

export default function ProgramSection() {
  const programImages = {
    culture: [
      { src: "home_6_1.webp", label: "전통문화 문화체험" },
      { src: "home_6_2.webp", label: "액티비티 문화체험" },
      { src: "home_6_3.webp", label: "템플스테이 문화체험" },
    ],
    job: [
      { src: "home_6_4.webp", label: "취창업 네트워킹 캠프" },
      { src: "home_6_5.webp", label: "취창업 교육 프로그램" },
    ],
  };

  return (
    <Container>
      <Row className="justify-content-center" style={{ padding: 0 }}>
        {/* 문화 체험 프로그램 */}
        <Col md="7" className="mb-4" style={{ padding: "5px" }}>
          <AnimatedCard bgColor={greenColors[0]}>
            <CardBody className="text-center">
              <div className="mt-3">
                <span style={{ fontSize: "1.5rem", color: "green" }}>✔</span>
              </div>
              <h5 style={{ color: "white" }}>
                <strong>문화 체험 프로그램</strong>
              </h5>
              <p style={{ letterSpacing: "-0.5px", color: "white" }}>
                로컬 컨텐츠를 활용한 다양하고 자유도 높은 프로그램 라인
              </p>
              <Row className="mt-4">
                {programImages.culture.map((item, idx) => (
                  <Col md="4" xs="12" className="mb-3" key={idx}>
                    <div
                      style={{
                        width: "100%",
                        height: "135px",
                        borderRadius: "10px",
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <p className="mt-2" style={{ color: "white" }}>
                      {item.label}
                    </p>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </AnimatedCard>
        </Col>

        {/* 직무 체험 프로그램 */}
        <Col md="5" className="mb-4" style={{ padding: "5px", position: "relative" }}>
          <AnimatedCard bgColor={greenColors[1]}>
            <CardBody className="text-center">
              <div className="mt-3">
                <span style={{ fontSize: "1.5rem", color: "green" }}>✔</span>
              </div>
              <h5 style={{ color: "white" }}>
                <strong>직무 체험 프로그램</strong>
              </h5>
              <p style={{ letterSpacing: "-0.5px", color: "white" }}>
                한국 취업에 도움이 되는 다양한 컨셉의 직무체험
              </p>
              <Row className="mt-4">
                {programImages.job.map((item, idx) => (
                  <Col md="6" xs="12" className="mb-3" key={idx}>
                    <div
                      style={{
                        width: "100%",
                        height: "135px",
                        borderRadius: "10px",
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <p className="mt-2" style={{ color: "white" }}>
                      {item.label}
                    </p>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </AnimatedCard>
        </Col>
      </Row>
    </Container>
  );
}
