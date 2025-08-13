// AccordionLayout.jsx
import React, { useState } from "react";
import "./AccordionLayout.scss";

export default function AccordionLayout() {
  const items = [
    { title: "킥오프 미팅", content: "킥오프 미팅 상세 내용입니다." },
    { title: "맞춤형 운영기획안 제공", content: "운영기획안 상세 내용입니다." },
    { title: "원패스 솔루션", content: "원패스 솔루션 상세 내용입니다." },
    { title: "예산에 맞춘 프로그램 기획", content: "프로그램 기획 상세 내용입니다." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion-layout">
      {/* 왼쪽 아코디언 메뉴 */}
      <div className="accordion-menu">
        <h1>맞춤형 기획</h1>
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className={activeIndex === idx ? "active" : ""}>
              <input
                type="checkbox"
                checked={activeIndex === idx}
                onChange={() =>
                  setActiveIndex(activeIndex === idx ? -1 : idx)
                }
              />
              <i></i>
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="accordion-content">
        {activeIndex >= 0 ? (
          <div className="content-box">{items[activeIndex].content}</div>
        ) : (
          <div className="content-box">내용을 선택하세요</div>
        )}
      </div>
    </div>
  );
}
