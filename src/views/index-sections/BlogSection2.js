import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const cards = [
  { id: 1, text: "카이스트 부여", sub: "25-1학기 문화체험 프로그램", img: "program_1_1.webp" },
  { id: 2, text: "순천향대학교 부여", sub: "25-1학기 문화체험 프로그램", img: "program_1_2.webp" },
  { id: 3, text: "충남대학교 보령", sub: "25-1학기 문화체험 프로그램", img: "program_1_3.webp" },
  { id: 4, text: "선문대학교 부여", sub: "25-1학기 문화체험 프로그램", img: "program_1_4.webp" },
  { id: 5, text: "백석(문화)대학교 천안아산", sub: "25-1학기 문화체험 프로그램", img: "program_1_5.webp" },
  { id: 6, text: "중부대학교 군산", sub: "25-1학기 문화체험 프로그램", img: "program_1_6.webp" },
  { id: 7, text: "백석(문화)대학교 전주", sub: "25-1학기 문화체험 프로그램", img: "program_1_7.webp" },
  { id: 8, text: "백석(문화)대학교 서울랜드", sub: "25-2학기 문화체험 프로그램", img: "program_1_8.webp" },
  { id: 9, text: "부여군 팸투어", sub: "24-2학기 문화체험 프로그램", img: "program_1_9.webp" },
  { id: 10, text: "충남대학교 천안아산", sub: "24-2학기 문화체험 프로그램", img: "program_1_10.webp" },
  { id: 11, text: "선문대학교 공주", sub: "24-2학기 문화체험 프로그램", img: "program_1_11.webp" },
  { id: 14, text: "CGV 돌모랭이 캐릭터팝업", sub: "24-2학기 직무체험 프로그램", img: "program_1_14.webp" },
  { id: 15, text: "당진 로컬 콘텐츠", sub: "24-2학기 직무체험 프로그램", img: "program_1_15.webp" },
  { id: 16, text: "뮤즈데이2", sub: "24-2학기 직무체험 프로그램", img: "program_1_17.webp" },
  { id: 18, text: "선문대학교 잡페스티벌", sub: "24-2학기 직무체험 프로그램", img: "program_1_18.webp" },
  { id: 12, text: "남서울대학교 부여", sub: "24-1학기 문화체험 프로그램", img: "program_1_12.webp" },
  { id: 13, text: "선문대학교 전주", sub: "24-1학기 문화체험 프로그램", img: "program_1_13.webp" },
  { id: 17, text: "뮤즈데이1", sub: "24-1학기 직무체험 프로그램", img: "program_1_16.webp" },
];

// 개별 카드 애니메이션 컴포넌트
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

export default function BlogSection2() {
  const [activeTab, setActiveTab] = useState(0);
  const tabItems = ["전체", "문화체험", "직무체험"];

  // 탭에 따라 카드 필터링
  const filteredCards = cards.filter((card) => {
    if (activeTab === 0) return true;
    if (activeTab === 1) return card.sub.includes("문화체험");
    if (activeTab === 2) return card.sub.includes("직무체험");
    return true;
  });

  return (
    <div className="p-4 container">
      {/* 탭 버튼 */}
      <div
        style={{
          marginBottom: "35px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {tabItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: "9px 18px",
              marginRight: "8px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              backgroundColor: activeTab === idx ? "#00A86C" : "#E8E8E8",
              color: activeTab === idx ? "#fff" : "#444",
              fontFamily: "Pretendard",
              outline: "none",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 카드 출력 */}
      <Row>
        {filteredCards.map((card) => (
          <Col md={4} key={card.id} style={{ marginBottom: "60px" }}>
            <AnimatedCard card={card} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
