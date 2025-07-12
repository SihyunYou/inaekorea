import React, { useState, useEffect } from "react";

// core components
import { Container, Button, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase } from "react-icons/fa";
import PortpolioViewer from "./index-sections/PortpolioViewer.js";

function LocalTripGuideIntro() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <strong>로컬트립가이드</strong>의<br/>포트폴리오를 확인해보세요!
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
            고객을 위한 수많은 프로그램과 콘텐츠가 준비되어 있습니다.
          </h4>
            <PortpolioViewer />

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
                contentStyle={{ background: 'green', color: "#fff", opacity: '0.7' }}
                contentArrowStyle={{ borderRight: "7px solid green" }}
                iconStyle={{ background: 'green', color: "#fff" }}
                icon={<FaSchool />}
              >
                <div style={{ textAlign: viewportWidth < 768 ? "left" : "right" }}>
                  <h3 className="vertical-timeline-element-title">
                    프로그램 상담
                  </h3>
                  <p>
                    + 문화체험 <strong>프로그램/콘텐츠 리스트</strong> 제공
                    <br />
                    + 학생 규모, 국적, 프로그램 목적 등 분석
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"           
                contentStyle={{ background: 'green', color: "#fff", opacity: '0.8' }}
                contentArrowStyle={{ borderRight: "7px solid green" }}
                iconStyle={{ background: 'green', color: "#fff" }}
                icon={<FaBriefcase />}
              >
                <div>
                  <h3 className="vertical-timeline-element-title">맞춤형 기획</h3>
                  <p>
                    + <strong>최적</strong>의 운영기획안 및 견적 제공
                    <br />
                    + 고객이 만족할 때까지 무제한 <strong>피드백</strong> 반영
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'green', color: "#fff", opacity: '0.9' }}
                contentArrowStyle={{ borderRight: "7px solid green" }}
                iconStyle={{ background: 'green', color: "#fff" }}
                icon={<FaSchool />}
              >
                <div style={{ textAlign: viewportWidth < 768 ? "left" : "right" }}>
                  <h3 className="vertical-timeline-element-title">
                    프로그램 운영
                  </h3>
                  <p>
                    + <strong>안전</strong>한 문화체험 운영
                    <br />
                    + <strong>만족도 조사</strong> 및 상세 피드백
                  </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'green', color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid green" }}
                iconStyle={{ background: 'green', color: "#fff" }}
                icon={<FaBriefcase />}
              >
                <div>
                  <h3 className="vertical-timeline-element-title">결과 보고</h3>
                  <p>
                    + 상세 결과 보고서 <strong>2~3일</strong> 내 제공
                    <br />
                    + 빠른 <strong>언론 홍보</strong> 및 인터넷 노출
                  </p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>

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
            아직 고민되시나요? <a href="www.example.com" style={{ color: 'green', textDecoration: 'underline' }}>로컬트립가이드 매니저와 상담</a>해보세요.<br />
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
    </>
  );
}

export default LocalTripGuideIntro;
