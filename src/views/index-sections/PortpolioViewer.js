import React, { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "천안/아산",
    contents: {
      "여행 프로그램": ["외암 민속마을", "독립 기념관", "현충사", "뚜쥬루 돌가마 마을"],
      "체험 프로그램": ["엿 만들기", "천연 염색"]
    }
  },
  {
    id: 2,
    name: "부여",
    contents: {
      "여행 프로그램": ["백제 문화단지", "정림사지"],
      "체험 프로그램": ["공예 체험", "백제 의복 체험"]
    }
  },
  {
    id: 3,
    name: "공주",
    contents: {
      "여행 프로그램": ["공산성", "공주 한옥마을"],
      "체험 프로그램": ["백제 왕실복 체험", "삼색 인절미 체험", "족욕 체험", "전통 시장 체험"]
    }
  },
  {
    id: 4,
    name: "보령",
    contents: {
      "여행 프로그램": ["석탄 박물관", "대천 해수욕장"],
      "체험 프로그램": ["대천 스카이 바이크"]
    }
  },
  {
    id: 5,
    name: "군산",
    contents: {
      "여행 프로그램": ["근대화 거리", "경암동 철길 마을"],
      "체험 프로그램": ["교복 체험", "전통과자 만들기 체험"]
    }
  },
  {
    id: 6,
    name: "전주",
    contents: {
      "여행 프로그램": ["전주 한옥마을", "경기전", "전동성당"],
      "체험 프로그램": ["전통 공예 체험", "한복 체험"]
    }
  },
  {
    id: 7,
    name: "서울랜드",
    contents: {
      "여행 프로그램": [],
      "체험 프로그램": []
    }
  },
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
          style={{ backgroundColor: '#00A86C', borderRadius: '50%', width: '20px', height: '20px', padding: '20px', marginRight: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                    backgroundColor: isSelected ? '#00A86C' : 'transparent',
                    color: isSelected ? 'white' : '#00A86C',
                    border: '1px solid #00A86C'
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
          style={{ backgroundColor: '#00A86C', borderRadius: '50%', width: '20px', height: '20px', padding: '20px', marginLeft: '1vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setSelectedIndex((prev) => prev + 1)}
        >
          ▶
        </button>
      </div>

      {/* 콘텐츠 영역 */}
<div>
  <h3 className="fw-bold mb-3 text-center">콘텐츠</h3>
  {Object.entries(selectedProgram.contents).map(([category, items]) => (
    <div key={category} className="mb-3">
      <h5 className="fw-bold text-center mb-3">{category}</h5>
      <div className="row">
        {items.map((content, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card h-100 shadow-sm border-0" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
              <div className="card-body text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h5 style={{ fontSize: '17px', fontWeight: '600' }}>{content}</h5>
<img
  src={require(`assets/img/${content}.png`)}
  style={{
    width: "calc(80px + 4vw)", 
    height: "calc(80px + 4vw)",
    objectFit: "cover",   
    objectPosition: "center", 
    borderRadius: "12px",
    marginTop: '4px'   
  }}
/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
      </div>
    </div>
  );
}
