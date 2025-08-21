import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    text: "카이스트 부여",
    sub: "25-1학기 문화체험 프로그램",
    img: "home_7_1.webp"
  },
  {
    id: 2,
    text: "중부대학교 군산",
    sub: "25-1학기 문화체험 프로그램",
    img: "home_7_2.webp"
  },
  {
    id: 3,
    text: "뮤즈데이2",
    sub: "24-2학기 직무체험 프로그램",
    img: "home_7_3.webp"
  },
];

function AnimatedCard({ card }) {
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
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <img
        src={card.img}
        style={{ borderRadius: "8px", aspectRatio: "13 / 9", width: "100%" }}
      />
      <h6 style={{ marginTop: "12px" }}>{card.text}</h6>
      <p style={{ color: "#666" }}>{card.sub}</p>
    </motion.div>
  );
}

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("Insight");

  return (
    <div className="p-4 container">
      {/* Tabs */}
      <Row className="align-items-center border-bottom pb-2 mb-4">
        <Col style={{ marginBottom: "-5px" }}>
          <span
            style={{
              fontFamily: "Pretendard",
              fontSize: "calc(0.5rem + 0.35vw)",
              marginBottom: "-5px",
            }}
          >
            <strong>국제교류처</strong>를 위한 다양한 테마의 프로그램들이 준비되어
            있습니다.
          </span>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <Button
            style={{
              padding: "10px 12px",
              color: "#444",
              textDecoration: "none",
              borderRadius: "6px",
              backgroundColor: "#EFEFEF",
            }}
            onClick={() => (window.location.href = "/program")}
          >
            <span
              style={{
                fontFamily: "Pretendard",
                fontSize: "calc(0.55rem + 0.35vw)",
                fontWeight: "800",
                marginBottom: "-5px",
              }}
            >
              프로그램 더보기
            </span>
          </Button>
        </Col>
      </Row>

      {/* Cards */}
      <Row>
        {cards.map((card) => (
          <Col md={4} key={card.id} className="mb-4">
            <AnimatedCard card={card} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
