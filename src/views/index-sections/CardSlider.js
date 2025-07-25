import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";

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

const CardSlider = ({ portfolioData, selectedName, isNew }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderItems = flattenPrograms(portfolioData, selectedName);

useEffect(() => {
  if (isNew) {
    setActiveIndex(0);
  }
}, [isNew]);

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
      콘텐츠
    </h6>
  </div>
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
