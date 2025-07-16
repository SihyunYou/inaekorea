import React, { useState, useEffect } from "react";
import './PortpolioViewer.css';
import CardSlider from './CardSlider.js';

const portfolioData = [
  {
    id: 1,
    name: "천안아산",
    contents: {
      "여행 프로그램": [
        { title: "외암 민속마을", duration: "1h 30", hot: true },
        { title: "독립 기념관", duration: "1h", hot: false },
        { title: "현충사", duration: "30m", hot: false },
        { title: "뚜쥬루 돌가마 마을", duration: "2h", hot: false },
      ],
      "체험 프로그램": [
        { title: "엿 만들기", duration: "1h", hot: false },
        { title: "천연 염색", duration: "1h 30", hot: true },
      ],
    },
  },
  {
    id: 2,
    name: "부여",
    contents: {
      "여행 프로그램": [
        { title: "백제 문화단지", duration: "2h", hot: false },
        { title: "정림사지", duration: "1h", hot: false },
      ],
      "체험 프로그램": [
        { title: "공예 체험", duration: "1h 30", hot: true },
        { title: "백제 의복 체험", duration: "1h", hot: false },
      ],
    },
  },
  {
    id: 3,
    name: "공주",
    contents: {
      "여행 프로그램": [
        { title: "공산성", duration: "1h 30", hot: false },
        { title: "공주 한옥마을", duration: "1h", hot: false },
      ],
      "체험 프로그램": [
        { title: "백제 왕실복 체험", duration: "1h", hot: false },
        { title: "삼색 인절미 체험", duration: "30m", hot: false },
        { title: "족욕 체험", duration: "30m", hot: false },
        { title: "전통 시장 체험", duration: "1h", hot: true },
      ],
    },
  },
  {
    id: 4,
    name: "보령",
    contents: {
      "여행 프로그램": [
        { title: "석탄 박물관", duration: "1h", hot: false },
        { title: "대천 해수욕장", duration: "2h", hot: false },
      ],
      "체험 프로그램": [
        { title: "대천 스카이 바이크", duration: "1h", hot: true },
      ],
    },
  },
  {
    id: 5,
    name: "군산",
    contents: {
      "여행 프로그램": [
        { title: "근대화 거리", duration: "1h 30", hot: false },
        { title: "경암동 철길 마을", duration: "1h", hot: false },
      ],
      "체험 프로그램": [
        { title: "교복 체험", duration: "1h", hot: false },
        { title: "전통과자 만들기 체험", duration: "1h 30", hot: true },
      ],
    },
  },
  {
    id: 6,
    name: "전주",
    contents: {
      "여행 프로그램": [
        { title: "전주 한옥마을", duration: "2h", hot: true },
        { title: "경기전", duration: "1h", hot: false },
        { title: "전동성당", duration: "30m", hot: false },
      ],
      "체험 프로그램": [
        { title: "전통 공예 체험", duration: "1h 30", hot: false },
        { title: "한복 체험", duration: "1h", hot: false },
      ],
    },
  },
];

const buttonSize = 80.45;
const visibleCount = 6;

const mod = (n, m) => ((n % m) + m) % m;

export default function PortfolioViewer() {
  const [currentName, setCurrentName] = useState('천안아산');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isNew, setIsNew] = useState(false);

useEffect(() => {
  setIsNew(true);
}, [currentName]);

  const visibleItems = Array(24).fill(portfolioData).flat(); // 24배 반복
  const middleIndex = portfolioData.length * 12 + 2;
  const offsetIndex = middleIndex + selectedIndex;

  const translateX = (offsetIndex - Math.floor(visibleCount / 2)) * (buttonSize + 10.7); // 중앙 정렬

  const selectedProgram = portfolioData[mod(selectedIndex, portfolioData.length)];

  return (
    <div className="container py-4">
  <div style={{ textAlign: 'center' }}>
    <h6
      className="fw-bold mb-4"
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        backgroundColor: '#00A86C',
        padding: '6px 12px',
        borderRadius: '12px',
        color: 'white'
      }}
    >
      프로그램
    </h6>
  </div>

      {/* 상단 캐러셀 */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <button
          className="btn btn-primary me-2"
          style={{
            backgroundColor: '#00A86C',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setSelectedIndex((prev) => prev - 1)}
          aria-label="Previous"
        >
          ◀
        </button>

        <div
          className="carousel-mask overflow-hidden"
          style={{ width: `${visibleCount * (buttonSize + 10)}px` }}
        >
          <div
            className="d-flex"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.3s ease",
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {visibleItems.map((item, i) => {
              const realIndex = mod(i, portfolioData.length);
              const isSelected = realIndex === mod(selectedIndex, portfolioData.length);
              return (
<button
  key={`${i}-${item.id}`}
  onClick={() => {
    const centerIndex = mod(selectedIndex, portfolioData.length);
    const diff = realIndex - centerIndex;

    const adjustedDiff =
      Math.abs(diff) > portfolioData.length / 2
        ? diff > 0
          ? diff - portfolioData.length
          : diff + portfolioData.length
        : diff;

    setSelectedIndex((prev) => prev + adjustedDiff);
    setCurrentName(item.name); // 지역명 변경!
  }}
  className={`d-flex align-items-center justify-content-center fw-bold ${
    isSelected ? "btn btn-primary" : "btn btn-outline-primary"
  }`}
  style={{
    width: isSelected ? 90 : buttonSize,
    height: isSelected ? 90 : buttonSize,
    fontSize: "1rem",
    fontWeight: '700',
    fontFamily: 'Pretendard',
    textAlign: "center",
    borderRadius: "10px",
    marginRight: "10px",
    whiteSpace: "normal",
    flexShrink: 0,
    padding: '5px',
    backgroundColor: isSelected ? '#00A86C' : 'transparent',
    color: isSelected ? 'white' : '#00A86C',
    border: '1px solid #00A86C',
    cursor: "pointer"
  }}
  aria-pressed={isSelected}
>
  {item.name}
</button>

              );
            })}
          </div>
        </div>

        <button
          className="btn btn-primary ms-2"
          style={{
            backgroundColor: '#00A86C',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setSelectedIndex((prev) => prev + 1)}
          aria-label="Next"
        >
          ▶
        </button>
      </div>

      <CardSlider selectedName={currentName} />
    </div>
  );
}
