import React, { useState, useEffect } from "react";
import './PortfolioViewer.css';
import CardSlider from './CardSlider.js';

const buttonSize = 77.4;
const visibleCount = 5;

const mod = (n, m) => ((n % m) + m) % m;

export default function PortfolioViewer({ portfolioData }) {
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

      <CardSlider portfolioData={portfolioData} selectedName={currentName} isNew={isNew} />
    </div>
  );
}
