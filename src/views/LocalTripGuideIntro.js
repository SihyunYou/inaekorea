import React, { useState, useEffect } from "react";

// core components
import { Container, Button, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase } from "react-icons/fa";

function Modal({ stepNumber, isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1050,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalStyle = {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    maxWidth: 720,
    width: '80%',
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <h3 style={{ fontSize: 'calc(16px + 0.4vw)', marginTop: '5px', marginBottom: '-25px', fontWeight: '600' }}>[STEP {stepNumber}.]</h3>
        <h4 style={{ fontSize: 'calc(16px + 0.4vw)' }}>{title}</h4>
        <div style={{ marginTop: '1vh', width: '88%' }}>{children}</div>
        <Button color="secondary" style={{ marginTop: 20 }} onClick={onClose}>
          닫기
        </Button>
      </div>
    </div>
  );
}

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Instagram embed 스크립트가 없으면 삽입
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: "1rem auto", maxWidth: "400px" }}
    ></blockquote>
  );
};

function LocalTripGuideIntro() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: null });
  const [stepNumber, setStepNumber] = useState(0);

  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return () => {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const openModal = (title, body) => {
    setModalContent({ title, body });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ title: "", body: null });
  };

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section section-nucleo-icons">
            <Container>
              <Row>
                <Col
                  lg="6"
                  md="12"
                  style={{
                    marginBottom: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    className="title"
                    style={{ fontSize: "calc(18px + 0.6vw)" }}
                  >
                    <strong>로컬트립가이드</strong>로
                    <br />
                    문화연수 기획의 고민을 해결해드립니다.
                  </h3>
                  <ul
                    className="description"
                    style={{
                      fontSize: "calc(12px + 0.5vw)",
                      listStyle: "none",
                      paddingLeft: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      <i
                        className="fas fa-check"
                        style={{ color: "#D4D4D4", marginRight: "8px" }}
                      ></i>
                      <span style={{ textDecoration: "line-through" }}>
                        프로그램 단순 기획 및 운영
                      </span>
                    </li>
                    <li>
                      <i
                        className="fas fa-check"
                        style={{ color: "#17a2b8", marginRight: "8px" }}
                      ></i>
                      대학교의 니즈에 맞는 맞춤형 프로그램 기획
                    </li>
                    <li>
                      <i
                        className="fas fa-check"
                        style={{ color: "#17a2b8", marginRight: "8px" }}
                      ></i>
                      전문 운영팀 배치를 통한 안정된 프로그램 운영
                    </li>
                    <li>
                      <i
                        className="fas fa-check"
                        style={{ color: "#17a2b8", marginRight: "8px" }}
                      ></i>
                      신속하고 세심한 운영 결과 보고서 제공
                    </li>
                    <li
                      style={{
                        color: "#2c2c2c",
                        fontWeight: "500",
                        marginTop: "10px",
                      }}
                    >
                      <i
                        className="fas fa-arrow-right"
                        style={{ color: "#2c2c2c", marginRight: "8px" }}
                      ></i>
                      <strong>로컬트립가이드</strong>로 대학교의 니즈와
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;유학생의 만족도를 동시에 해결할 수
                      있습니다.
                    </li>
                  </ul>
                </Col>
                <Col lg="6" md="12">
                  <img
                    alt="..."
                    src={require("assets/img/hero-image-2.png")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <h2
            className="title"
            style={{
              fontSize: "calc(18px + 0.6vw)",
              textAlign: "center",
              margin: "0.8vh",
            }}
          >
            <strong>로컬트립가이드</strong>는 <br /> 검증된 솔루션입니다.
          </h2>
          <h4
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "1.6vh",
              color: "#666",
              fontSize: "calc(12px + 0.5vw)",
            }}
          >
            이미 많은 대학과 학생들이 로컬트립가이드를 경험했습니다.
          </h4>
          <Container>
            <Row>
              <Col xs="6" md="3">
                <div className="box-no-border" style={{ padding: "5px" }}>
                  <img
                    src={require("assets/img/fruit1.png")}
                    style={{ width: "80%" }}
                  />
                  <h1
                    style={{
                      fontSize: "calc(19px + 0.7vw)",
                      fontWeight: "900",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    10+
                  </h1>
                  <h4 style={{ fontSize: "calc(14px + 0.5vw)" }}>
                    <strong>참여 대학</strong>
                  </h4>
                </div>
              </Col>
              <Col xs="6" md="3">
                <div className="box-no-border" style={{ padding: "5px" }}>
                  <img
                    src={require("assets/img/fruit2.png")}
                    style={{ width: "80%" }}
                  />
                  <h1
                    style={{
                      fontSize: "calc(19px + 0.7vw)",
                      fontWeight: "900",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    25+
                  </h1>
                  <h4 style={{ fontSize: "calc(14px + 0.5vw)" }}>
                    <strong>참여 학생 국적</strong>
                  </h4>
                </div>
              </Col>
              <Col xs="6" md="3">
                <div className="box-no-border" style={{ padding: "5px" }}>
                  <img
                    src={require("assets/img/fruit3.png")}
                    style={{ width: "80%" }}
                  />
                  <h1
                    style={{
                      fontSize: "calc(19px + 0.7vw)",
                      fontWeight: "900",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    1500+
                  </h1>
                  <h4 style={{ fontSize: "calc(14px + 0.5vw)" }}>
                    <strong>참여 외국인 학생</strong>
                  </h4>
                </div>
              </Col>
              <Col xs="6" md="3">
                <div className="box-no-border" style={{ padding: "5px" }}>
                  <img
                    src={require("assets/img/fruit3.png")}
                    style={{ width: "80%" }}
                  />
                  <h1
                    style={{
                      fontSize: "calc(19px + 0.7vw)",
                      fontWeight: "900",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    95%
                  </h1>
                  <h4 style={{ fontSize: "calc(14px + 0.5vw)" }}>
                    <strong>참여자 만족도</strong>
                  </h4>
                </div>
              </Col>
            </Row>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h2
              className="title"
              style={{
                fontSize: "calc(18px + 0.6vw)",
                textAlign: "center",
                margin: "0.8vh",
              }}
            >
              <strong>로컬트립가이드</strong>는<br/>체계적인 프로세스로 이루어집니다.
            </h2>
          <h4
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "2vh",
              color: "#666",
              fontSize: "calc(12px + 0.5vw)",
            }}
          >
            처음부터 끝까지, 로컬트립가이드가 책임지고 문화체험 운영을 도와드립니다.
          </h4>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#6c63ff", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #6c63ff" }}
                date="2015 - 2019"
                iconStyle={{ background: "#6c63ff", color: "#fff" }}
                icon={<FaSchool />}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStepNumber(1);
                    openModal(
                      "정확한 프로그램 기획을 위한 1:1 고객 상담",
                      <div style={{ textAlign: 'left', fontSize: 'calc(12px + 0.2vw)' }}>
                        <li className="indent-second-line"><strong>고객 맞춤형 프로그램</strong> 제공을 위한 참여 학생 규모, 국적, 프로그램 목적 등을 분석합니다.</li>
                        <li className="indent-second-line">상단의 <strong>전화, 메일, 인스타그램</strong>으로 언제든지 문의주실 수 있습니다.</li> 
                      </div>
                    )
}
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    프로그램 상담
                  </h3>
                  <p>
                    + 문화체험 리스트 제공
                    <br />
                    + 예산, 규모, 국적 등 상담
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2022"
                contentStyle={{ background: "#e86971", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #e86971" }}
                iconStyle={{ background: "#e86971", color: "#fff" }}
                icon={<FaBriefcase />}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStepNumber(2);
                    openModal(
                      "고객 데이터에 따른 맞춤형 프로그램 운영기획안",
                      <div style={{ textAlign: 'left', fontSize: 'calc(12px + 0.2vw)' }}>
                        <li className="indent-second-line">대학에 편성된 예산을 고려하여 <strong>최적의 견적</strong>을 확보해드립니다.</li>
                        <li className="indent-second-line">단순 기획에서 그치는 것이 아니라 고객이 만족할 때까지 <strong>피드백을 무제한</strong>으로 반영해드립니다.</li> 
                      </div>
                    )
}
                  }
                >
                  <h3 className="vertical-timeline-element-title">맞춤형 기획</h3>
                  <p>
                    + 최적의 운영기획안 및 견적 제공
                    <br />
                    + 버스, 식당, 보험 등 준비
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: "#6c63ff", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #6c63ff" }}
                date="2015 - 2019"
                iconStyle={{ background: "#6c63ff", color: "#fff" }}
                icon={<FaSchool />}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
{
                    setStepNumber(3);
                    openModal(
                      "전문 여행팀과 함께하는 참여형 프로그램 운영",
                      <div style={{ textAlign: 'left', fontSize: 'calc(12px + 0.2vw)' }}>
                        <li className="indent-second-line">현지 문화 경험을 온전히 할 수 있는 <strong>체계화되고 안전한</strong> 시스템을 제공합니다.</li>
                        <li className="indent-second-line">단순 여행에서 끝나는 것이 아니라 체계적인 <strong>만족도 조사</strong> 및 이에 따른 <strong>상세 피드백</strong>이 제공됩니다.</li> 
                      </div>
                    )
}
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    프로그램 운영
                  </h3>
                  <p>
                    + <strong>안전</strong>한 문화체험 운영
                    <br />
                    + 만족도 조사 및 상세 피드백
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2022"
                contentStyle={{ background: "#e86971", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #e86971" }}
                iconStyle={{ background: "#e86971", color: "#fff" }}
                icon={<FaBriefcase />}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setStepNumber(4);
                    openModal(
                      "데이터 추출 및 가공으로 더욱더 간편한 후속 결과",
                      <div style={{ textAlign: 'left', fontSize: 'calc(12px + 0.2vw)' }}>
                        <li className="indent-second-line">운영 일정 및 만족도 조사를 기반으로 한 <strong>프로그램 결과 보고서를 2~3일</strong> 내로 신속하게 받아볼 수 있습니다.</li>
                        <li className="indent-second-line">빠른 실행력과 노출로 인터넷 뉴스 등의 <strong>언론 홍보</strong>가 이루어집니다.</li> 
                      </div>
);
                    }
                  }
                >
                  <h3 className="vertical-timeline-element-title">결과 보고</h3>
                  <p>
                    + 상세 결과 보고서 제공
                    <br />
                    + 사진/영상 제공
                  </p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>

            <br /><br /><br /><br />
            <h2
              className="title"
              style={{
                fontSize: "calc(18px + 0.6vw)",
                textAlign: "center",
                margin: "0.8vh",
              }}
            >
              <strong>로컬트립가이드</strong> 콘텐츠가 궁금하신가요?
            </h2>
          <h4
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "1.6vh",
              color: "#666",
              fontSize: "calc(12px + 0.5vw)",
            }}
          >
            지금 로컬트립가이드를 팔로우하고 진행했던 프로그램들을 확인하세요!
          </h4>
  <Row className="justify-content-center" style={{ marginTop: '30px' }}>
    <Col xs="12" md="6" lg="4" className="d-flex justify-content-center mb-4">
      <InstagramEmbed url="https://www.instagram.com/p/DL4Yw4STdps/" />
    </Col>
    <Col xs="12" md="6" lg="4" className="d-flex justify-content-center mb-4">
      <InstagramEmbed url="https://www.instagram.com/p/DLUXzJizWp7/" />
    </Col>
    <Col xs="12" md="6" lg="4" className="d-flex justify-content-center mb-4">
      <InstagramEmbed url="https://www.instagram.com/p/DLhH_zNz3ih/" />
    </Col>
  </Row>

            <br /><br /><br /><br /><br /><br /><br /><br />
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h2
              className="title"
              style={{
                fontSize: "calc(18px + 0.6vw)",
                textAlign: "center",
                margin: "0.8vh",
              }}
            >
              지금 무료로 상담 받아보세요!
            </h2>
          <h4
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "2vh",
              color: "#666",
              fontSize: "calc(12px + 0.5vw)",
            }}
          >
            아직 고민되시나요? <a href="www.example.com" style={{ color: '#56D1F2', textDecoration: 'underline' }}>로컬트립가이드 매니저와 상담</a>해보세요.<br />
            맞춤형 프로그램 기획부터 견적 산출까지 무료로 상담해드립니다.
          </h4>
          
<a
  href="https://drive.google.com/file/d/1anJwDELyp2M6pJNY6GWXzYOlmRcgc2sw/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="custom-outline-button">서비스 소개서</button>
</a>
          </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </Container>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        stepNumber={stepNumber}
      >
        {modalContent.body}
      </Modal>
    </>
  );
}

export default LocalTripGuideIntro;
