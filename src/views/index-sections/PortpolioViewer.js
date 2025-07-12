import React, { useState } from "react";

const portfolioData = [
  { id: 1, name: "천안아산", contents: ["음성인식", "커리큘럼", "튜터"] },
  { id: 2, name: "부여", contents: ["문화연수", "보고서", "시각화"] },
  { id: 3, name: "보령", contents: ["자동번역", "발화등록", "시나리오"] },
  { id: 4, name: "태백", contents: ["피치덱", "포맷관리", "데이터수집"] },
  { id: 5, name: "서해 바다", contents: ["로그분석", "레벨분류", "리포트"] },
  { id: 6, name: "우헤헤헤", contents: ["큐레이션", "이력관리", "LMS 연동"] },
];
const buttonSize = 90;
const visibleCount = 5;

const mod = (n, m) => ((n % m) + m) % m;

export default function PortfolioViewer() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleItems = [...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData, ...portfolioData];
  const middleIndex = portfolioData.length;
  const offsetIndex = middleIndex + selectedIndex;

  const translateX = (offsetIndex - 2) * (buttonSize + 10.7); // 중앙 맞추기

  const selectedProgram = portfolioData[mod(selectedIndex, portfolioData.length)];

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4 text-center">프로그램</h3>

      {/* 상단 캐러셀 */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <button
          className="btn btn-primary me-2"
          style={{ backgroundColor: 'green', borderRadius: '50%', width: '20px', height: '20px', padding: '20px', marginRight: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setSelectedIndex((prev) => prev - 1)}
        >
          ◀
        </button>

<div className="carousel-mask overflow-hidden" style={{ width: `${visibleCount * (buttonSize + 10)}px` }}>
          <div
            className="d-flex"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.3s ease",
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

  // 최소 이동 거리 계산 (양 끝 간 순환 고려)
  const adjustedDiff = Math.abs(diff) > portfolioData.length / 2
    ? diff > 0
      ? diff - portfolioData.length
      : diff + portfolioData.length
    : diff;

  setSelectedIndex((prev) => prev + adjustedDiff);
}}
                  className={`d-flex align-items-center justify-content-center fw-bold ${
                    isSelected ? "btn btn-primary" : "btn btn-outline-primary"
                  }`}
                  style={{
                    width: isSelected ? 90 : buttonSize,
                    height: isSelected ? 90 : buttonSize,
                    fontSize: "0.8rem",
                    textAlign: "center",
                    borderRadius: "10px",
                    marginRight: "10px",
                    whiteSpace: "normal",
                    flexShrink: 0,
                    padding: '5px',
                    backgroundColor: isSelected ? 'green' : 'transparent',
                    color: isSelected ? 'white' : 'green',
                    border: '1px solid green'
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        <button
          className="btn btn-primary ms-2"
          style={{ backgroundColor: 'green', borderRadius: '50%', width: '20px', height: '20px', padding: '20px', marginLeft: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setSelectedIndex((prev) => prev + 1)}
        >
          ▶
        </button>
      </div>

      {/* 콘텐츠 영역 */}
      <div>
        <h3 className="fw-bold mb-4 text-center">콘텐츠</h3>
        <div className="row">
          {selectedProgram.contents.map((content, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '10px' }} >
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 style={{ fontWeight: '600' }}>{content}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
