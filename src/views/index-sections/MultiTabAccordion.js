import React, { useState } from "react";
import "./MultiTabAccordion.css";

const tabData = [
    {
        title: "맞춤형 기획",
        items: [
            { header: "킥오프 미팅", body: "Edge 내용 1", image: "Meeting.gif" },
            { header: "맞춤형 운영기획안 제공", body: "Edge 내용 2", image: "Meeting.gif" },
            { header: "원패스 솔루션", body: "Edge 내용 3", image: "Meeting.gif" },
            { header: "예산에 맞춘 프로그램 기획", body: "Edge 내용 4", image: "Meeting.gif" },
        ],
    },
    {
        title: "현장 운영 시스템",
        items: [
            { header: "Labeling Item 1", body: "Labeling 내용 1", image: "header.jpg" },
            { header: "Labeling Item 2", body: "Labeling 내용 2", image: "header.jpg" },
            { header: "Labeling Item 3", body: "Labeling 내용 3", image: "header.jpg" },
            { header: "Labeling Item 4", body: "Labeling 내용 4", image: "header.jpg" },
        ],
        image: "/images/smart-labeling.png",
    },
    {
        title: "데이터 기반 결과 보고",
        items: [
            { header: "Conditioned Image Generation", body: "내용 1", image: "header.jpg" },
            { header: "Object Modifier", body: "내용 2", image: "header.jpg" },
            { header: "Video Synthesis", body: "내용 3", image: "header.jpg" },
        ],
        image: "/images/sample.png",
    },
];

export default function MultiTabAccordion() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // 닫히지 않게 클릭시 항상 선택된 상태 유지
    const toggleAccordion = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="multi-container">
            {/* 탭 메뉴 */}
            <div className="tab-menu">
                {tabData.map((tab, idx) => (
                    <button
                        key={tab.title}
                        className={`tab ${activeTab === idx ? "active" : ""}`}
                        onClick={() => {
                            setActiveTab(idx);
                            setActiveIndex(0); // 탭 바뀌면 첫 아이템 선택
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* 컨텐츠 영역: content 30%, image 70% */}
            <div
                style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    marginTop: '2.5vh'
                }}
            >
                <div
                    className="content-area"
                    style={{ flexBasis: "40%", width: "40%" }}
                >
                    <div className="accordion">
                        {tabData[activeTab].items.map((item, i) => (
                            <div className="accordion-item" key={i}>
<div
  className={`accordion-header ${activeIndex === i ? "active" : ""}`}
  onClick={() => toggleAccordion(i)}
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  }}
>
  <p style={{ margin: 0, color: activeIndex === i ? "#00A86C" : "#444" }}>{item.header}</p>
  <div
    style={{
      width: "8px",
      height: "8px",
      borderRight: "2px solid #444",
      borderBottom: "2px solid #444",
      transform: activeIndex === i ? "rotate(45deg)" : "rotate(-45deg)",
      transition: "transform 0.3s ease",
      marginLeft: "8px",
    }}
  />
</div>
                                {activeIndex === i && (
                                    <div className="accordion-body">{item.body}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="image-area"
                    style={{ flexBasis: "60%", width: "60%" }}
                >
                    <img
                        src={tabData[activeTab]?.items[activeIndex]?.image}
                        alt={tabData[activeTab].items[activeIndex]?.header || ""}
                        style={{ width: "80%", height: "auto", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}
