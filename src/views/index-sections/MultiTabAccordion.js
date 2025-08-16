import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "./MultiTabAccordion.css";
import { generateGreenGradient } from "../utils/Color.js";

const greenColors = generateGreenGradient(4);

const tabData = [
    {
        title: "맞춤형 기획",
        items: [
            {
                subtitle: "킥오프 미팅",
                description: "대학별 필요한 요소를 확인하고 제안드리기 위해 미팅을 진행합니다.",
                addition: ["기획에 필요한 프로그램 컨셉, 일정, 예산 등 확인"],
            },
            {
                subtitle: "프로그램 기획",
                description: "대학별 요구 사항에 맞춰 프로그램을 설계합니다.",
                addition: ["일정과 예산에 맞는 프로그램 구성"],
            },
            {
                subtitle: "자료 준비",
                description: "프레젠테이션 자료와 문서를 준비합니다.",
                addition: ["학교별 맞춤 자료 작성"],
            },
            {
                subtitle: "검토 및 피드백",
                description: "대학 담당자와 피드백 회의를 진행합니다.",
                addition: ["필요한 수정 사항 반영"],
            },
        ],
    },
    {
        title: "현장 운영 시스템",
        items: [
            { subtitle: "로트가만의 '필드크루' 현장 스테프", description: "다국적, 대규모 외국인을 운영하기 위해 '외국인 유학생 출신' 및 '관광통역안내사' 등으로 이루어진 전문 현장 스테프 팀이 움직입니다.", addition: ["'총괄 1명 + 버스당 1명'으로 배치되는 전문적인 운영 시스템", "확실한 '인원체크'를 통해 출석부 제공"] },
            { subtitle: "참여율, 만족도를 올리기 위한 '디지털QR 시스템'", description: "참여율이 낮은 학생들을 위해 목걸이 QR과 오픈채팅을 활용한 '디지털QR 시스템'을 도입하여 정보 전달을 강화하고, 외국인 유학생들의 참여율과 만족도를 높이고자 노력합니다.", addition: ["인식 목걸이를 활용한 로트가만의 '디지털 안내문' 시스템", "'오픈채팅'을 활용한 정보 전달 및 비상 연락망 구축"] },
        ],
    },
    {
        title: "데이터 기반 결과 보고",
        items: [
            { subtitle: "데이터 기반의 결과보고서 제공", description: "내외부 보고서 작성에 도움을 드릴 수 있는 결과보고서를 데이터에 기반하여 상세하게 제공드립니다.", addition: ["보고서로 바로 사용할 수 있는 정도의 퀄리티"] },
            { subtitle: "AI 분석 기반의 만족도 데이터 제공", description: "로컬트립가이드만의 AI 기술을 기반으로 현장에서 수집한 만족도를 데이터 가공하여 '결과보고서'에 첨부하여 제공드립니다.", addition: ["필요한 양식 등을 반영한 '제작 → 조사 → 분석'"] },
            { subtitle: "현장 사진영상 데이터 제공", description: "'필드크루'들이 생생한 현장 스케치를 촬영한 사진영상 데이터 원본을 제공하여 활용하실 수 있도록 노력합니다.", addition: ["현장 사진, 영상 대용량 데이터 제공"] },
            { subtitle: "보도자료 및 SNS 홍보", description: "무상으로 프로그램에 대한 성과를 홍보할 수 있도록 로컬트립가이드가 보유한 채널을 통해 진행합니다.", addition: ["최고의 성과를 위한 로컬트립가이드만의 노력"] },
        ],
    },
];

export default function MultiTabAccordion() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index);
    };

    const activeItems = tabData[activeTab].items || [];

    return (
        <div className="multi-container">
            {/* 탭 메뉴 */}
            <div className="tab-menu">
                {tabData.map((tab, idx) => (
                    <button
                        key={tab.title}
                        className={`tab-button ${activeTab === idx ? "active" : ""}`}
                        onClick={() => {
                            setActiveTab(idx);
                            setActiveIndex(0);
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* 선택된 탭의 아코디언 내용 */}
<Row style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
    {activeItems.map((item, idx) => (
        <Col md={6} key={idx} className="mb-1 d-flex">
            <Card
                style={{
                    borderRadius: "15px",
                    backgroundColor: greenColors[idx],
                    flex: 1, // Col 안에서 카드가 가득 채우도록
                }}
            >
                <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                    <h5><strong>{item.subtitle}</strong></h5>
                    <p>{item.description}</p>
<ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
  {item.addition.map((text, idx) => (
    <li key={idx}>{text}</li>
  ))}
</ul>
                </CardBody>
            </Card>
        </Col>
    ))}
</Row>
        </div>
    );
}
