import React, { useState, useEffect } from "react";

// core components
import { Container, Button, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase } from "react-icons/fa";

function Modal({ isOpen, onClose, title, children }) {
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
    maxWidth: 500,
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <h4>{title}</h4>
        <div style={{ marginTop: 15 }}>{children}</div>
        <Button color="secondary" style={{ marginTop: 20 }} onClick={onClose}>
          닫기
        </Button>
      </div>
    </div>
  );
}

function LocalTripGuideIntro() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: null });

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
                  onClick={() =>
                    openModal(
                      "프로그램 상담",
                      <>
                        <p>+ 문화체험 리스트 제공</p>
                        <p>+ 예산, 규모, 국적 등 상담</p>
                      </>
                    )
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
                  onClick={() =>
                    openModal(
                      "맞춤형 기획",
                      <>
                        <p>+ 최적의 운영기획안 및 견적 제공</p>
                        <p>+ 버스, 식당, 보험 등 준비</p>
                      </>
                    )
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
                    openModal(
                      "프로그램 운영",
                      <>
                        <p>+ <strong>안전</strong>한 문화체험 운영</p>
                        <p>+ 만족도 조사 및 상세 피드백</p>
                      </>
                    )
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
                  onClick={() =>
                    openModal(
                      "결과 보고",
                      <>
                        <p>+ 상세 결과 보고서 제공</p>
                        <p>+ 사진/영상 제공</p>
                      </>
                    )
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
          </Container>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.body}
      </Modal>
    </>
  );
}

export default LocalTripGuideIntro;
