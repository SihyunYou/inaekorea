import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";

const portfolioData = [
  {
    id: 1,
    name: "천안아산",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    contents: {
      "여행 프로그램": [
        { title: "외암 민속마을", hot: true },
        { title: "독립 기념관", hot: false },
        { title: "현충사", hot: false },
        { title: "뚜쥬루 돌가마 마을", hot: false },
      ],
      "체험 프로그램": [
        { title: "엿 만들기", hot: false },
        { title: "천연 염색", hot: true },
      ],
    },
  },
  {
    id: 2,
    name: "부여",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    contents: {
      "여행 프로그램": [
        { title: "백제 문화단지", hot: false },
        { title: "정림사지", hot: false },
      ],
      "체험 프로그램": [
        { title: "공예 체험", hot: true },
        { title: "백제 의복 체험", hot: false },
      ],
    },
  },
  {
    id: 3,
    name: "공주",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    contents: {
      "여행 프로그램": [
        { title: "공산성", hot: false },
        { title: "공주 한옥마을", hot: false },
      ],
      "체험 프로그램": [
        { title: "백제 왕실복 체험", hot: false },
        { title: "삼색 인절미 체험", hot: false },
        { title: "족욕 체험", hot: false },
        { title: "전통 시장 체험", hot: true },
      ],
    },
  },
  {
    id: 4,
    name: "보령",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    contents: {
      "여행 프로그램": [
        { title: "석탄 박물관", hot: false },
        { title: "대천 해수욕장", hot: false },
      ],
      "체험 프로그램": [
        { title: "대천 스카이 바이크", hot: true },
      ],
    },
  },
  {
    id: 5,
    name: "군산",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    contents: {
      "여행 프로그램": [
        { title: "근대화 거리", hot: false },
        { title: "경암동 철길 마을", hot: false },
      ],
      "체험 프로그램": [
        { title: "교복 체험", hot: false },
        { title: "전통과자 만들기 체험", hot: true },
      ],
    },
  },
  {
    id: 6,
    name: "전주",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
    contents: {
      "여행 프로그램": [
        { title: "전주 한옥마을", hot: true },
        { title: "경기전", hot: false },
        { title: "전동성당", hot: false },
      ],
      "체험 프로그램": [
        { title: "전통 공예 체험", hot: false },
        { title: "한복 체험", hot: false },
      ],
    },
  },
  {
    id: 7,
    name: "서울랜드",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    contents: {
      "여행 프로그램": [
        { title: "서울랜드", hot: true },
      ],
      "체험 프로그램": [],
    },
  },
];

const flattenPrograms = (data, selectedName) => {
  const result = [];
  const item = data.find((d) => d.name === selectedName);
  if (!item) return [];

  Object.entries(item.contents).forEach(([category, programs]) => {
    programs.forEach((program) => {
      result.push({
        id: `${item.id}-${category}-${program.title}`,
        region: item.name,
        category,
        title: program.title,
        hot: program.hot,
        image: require(`assets/img/${program.title}.png`),
      });
    });
  });
  return result;
};

const CardSlider = ({ selectedName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderItems = flattenPrograms(portfolioData, selectedName);

  if (sliderItems.length === 0) {
    return <p>선택된 지역의 프로그램이 없습니다.</p>;
  }

  const settings = {
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "0px" },
      },
    ],
  };

  return (
    <section className="game-section">
      <h6 style={{ marginBottom: "2.5vh" }}>콘텐츠</h6>
      <Slider {...settings} className="custom-carousel">
        {sliderItems.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            <div className="image-wrapper" style={{ position: "relative" }}>
              {item.hot && (
                <div
                  className="hot-badge"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#e91e63",
                    color: "white",
                    padding: "3px 7px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    zIndex: 10,
                    userSelect: "none",
                  }}
                >
                  HOT
                </div>
              )}
              <img
                src={item.image}
                alt={`${item.region} - ${item.title}`}
                className="game-image"
              />
              <div className="image-gradient" />
              <div className="item-desc">
                <h6>{item.title}</h6>
                <p>
                  <strong>{item.region}</strong> / {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardSlider;
