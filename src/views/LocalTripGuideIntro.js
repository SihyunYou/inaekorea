import React, { useState, useEffect, useRef } from "react";

// core components
import { Container, Button, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase } from "react-icons/fa";
import PortpolioViewer from "./index-sections/PortpolioViewer.js";
import CountUp from "react-countup";
import { MdArrowDownward } from "react-icons/md";
import SlideInSection from "./SlideInSection.js";
import "./index-sections/InfiniteCarousel.css";
import { motion } from "framer-motion";
import KakaoChatButton from "./KakaoChatButton.js";

const steps = [
  {
    title: "프로그램 상담",
    icon: <FaSchool />,
  },
  {
    title: "맞춤형 기획",
    icon: <FaBriefcase />,
  },
  {
    title: "프로그램 운영",
    icon: <FaSchool />,
  },
  {
    title: "결과 보고",
    icon: <FaBriefcase />,
  }
];

const HorizontalTimeline = () => {
  return (
    <div style={{ padding: "40px 20px", overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          minWidth: "800px",
          justifyContent: "center",
          position: "relative"
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#00A86C",
              color: "#fff",
              padding: "20px",
              borderRadius: "12px",
              minWidth: "200px",
              flexShrink: 0,
              position: "relative",
              textAlign: "center"
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginBottom: "10px"
              }}
            >
              {step.icon}
            </div>
            <h6 style={{ margin: '0' }}>{step.title}</h6>

            {/* 연결선 */}
{index !== steps.length - 1 && (
  <div
    style={{
      position: "absolute",
      right: "-30px",
      top: "50%",
      width: "40px",
      height: "2px",
      backgroundColor: "#00A86C",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
    }}
  >
    {/* 화살촉 */}
    <div
      style={{
        width: 0,
        height: 0,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderLeft: "8px solid #00A86C",
        marginLeft: "auto", // 오른쪽 끝에 붙임
      }}
    />
  </div>
)}
          </div>
        ))}
      </div>
    </div>
  );
};

function StatBox({ imgSrc, end, suffix, label, duration = 2 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || isVisible) return;

      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <motion.div
      className="box-no-border"
      style={{ backgroundColor: "#00A86A", marginTop: '2.5vh', borderRadius: '12px' }}
      ref={ref}
      initial={{ scale: 0.8, opacity: 0.2 }}
      animate={isVisible ? { scale: 1.1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={imgSrc} style={{ width: "80%" }} />
      <h6 style={{ fontWeight: "900", color: 'white', margin: '8px 0' }}>
        {isVisible ? (
          <CountUp end={end} duration={duration} suffix={suffix} separator="," />
        ) : (
          "0"
        )}
      </h6>
      <h6 style={{ color: 'white' }}>
        {label}
      </h6>
    </motion.div>
  );
}

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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

          <h4
            style={{
              textAlign: "center",
              margin: "1vh",
            }}
          >
            <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>는 <br /> 검증된 솔루션입니다.
          </h4>
          <h6
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "1.6vh",
              color: "#666",
            }}
          >
            이미 많은 대학과 학생들이 로컬트립가이드를 경험했습니다.
          </h6>
          <Container>
<Row style={{ marginTop: '8vh' }}>
  <Col xs="6" md="3">
    <StatBox imgSrc={require("assets/img/fruit1.png")} end={10} suffix="+" label="참여 대학" duration={5}/>
  </Col>
  <Col xs="6" md="3" style={{ marginTop: '10vh' }}>
    <StatBox imgSrc={require("assets/img/fruit2.png")} end={1500} suffix="+" label="참여 유학생" duration={2}/>
  </Col>
  <Col xs="6" md="3">
    <StatBox imgSrc={require("assets/img/fruit3.png")} end={50} suffix="+" label="진행 프로그램 수" duration={4}/>
  </Col>
  <Col xs="6" md="3" style={{ marginTop: '10vh' }}>
    <StatBox imgSrc={require("assets/img/fruit4.png")} end={20} suffix="+" label="보유 프로그램 수" duration={4}/>
  </Col>
</Row>


            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <h4
            style={{
              textAlign: "center",
              margin: "0.8vh",
            }}
          >
            <strong style={{ color: '#00A86C' }}>로컬트립가이드</strong>의<br />파트너를 확인해보세요.
          </h4>
          <h6
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "1.6vh",
              color: "#666",
            }}
          >
            로컬트립가이드는 수많은 네트워크를 보유 중입니다.
          </h6>
<div class="slider-wrapper left">
  <div class="item item1"><img src={require("assets/img/충남대.webp")} /></div>
  <div class="item item2"><img src={require("assets/img/남서울대.png")} /></div>
  <div class="item item3"><img src={require("assets/img/카이스트.jpg")} /></div>
  <div class="item item4"><img src={require("assets/img/나사렛대.jpg")} /></div>
  <div class="item item5"><img src={require("assets/img/선문대.jpg")} /></div>
  <div class="item item6"><img src={require("assets/img/백석대.png")} /></div>
  <div class="item item7"><img src={require("assets/img/순천향대.png")} /></div>
  <div class="item item8"><img src={require("assets/img/아트뮤.png")} /></div>
</div>
{/*<div class="slider-wrapper right">
  <div class="item item1"></div>
  <div class="item item2"></div>
  <div class="item item3"></div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item6"></div>
  <div class="item item7"></div>
</div>*/}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h4
              style={{
                textAlign: "center",
                margin: "0.8vh",
              }}
            >
              <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>의<br/>포트폴리오를 확인해보세요!
            </h4>
          <h6
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "2vh",
              color: "#666",
            }}
          >
            고객을 위한 수많은 프로그램과 콘텐츠가 준비되어 있습니다.
          </h6>
            <PortpolioViewer />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h4
              style={{
                textAlign: "center",
                margin: "1vh",
              }}
            >
              <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>는<br/>체계적인 프로세스로 이루어집니다.
            </h4>
          <h6
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "2vh",
              color: "#666",
            }}
          >
            처음부터 끝까지, 로컬트립가이드가 책임지고 문화체험 운영을 도와드립니다.
          </h6>
          <HorizontalTimeline />

           <br /><br />
           <Container style={{ margin: '10vh 0' }}>
              <Row>
                <Col lg="6" md="12">
                  <SlideInSection imageSrc={require("assets/img/bg1.png")} width="calc(150px + 15vw)" />
                </Col>
                <Col
                  lg="6"
                  md="12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5 style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <strong>&nbsp;&nbsp;STEP 1.</strong> 프로그램 상담
                  </h5>
                  <h6 style={{ margin: '0' }}>
                    <ul class="plus-list" style={{ lineHeight: '1.5' }}>
                      <li>정확한 프로그램 기획을 위한 <strong style={{ color: '#00A86C' }}>1:1 고객 상담</strong></li>
                      <li><strong style={{ color: '#00A86C' }}>고객 맞춤형</strong> 프로그램 및 견적 위한 다각도 분석</li>
                      <li>상단 <strong style={{ color: '#00A86C' }}>전화/메일/인스타그램</strong>으로 상담 문의 가능</li>
                    </ul>
                  </h6>
                </Col>
              </Row>
            </Container>
           <Container style={{ margin: '10vh 0' }}>
              <Row>
                <Col
                  lg="6"
                  md="12"
                  style={{
                    marginBottom: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    textAlign: 'right'
                  }}
                >
                  <h5 style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <strong>&nbsp;&nbsp;&nbsp;STEP 2.</strong> 맞춤형 기획
                  </h5>
                  <h6 style={{ margin: '0' }}>
                      <strong style={{ color: '#00A86C' }}>맞춤형</strong> 운영 시스템, 이벤트 기획&nbsp;&nbsp;&nbsp;+<br />
                      편성 예산을 고려한 <strong style={{ color: '#00A86C' }}>최저가, 최적</strong>의 견적 확보 &nbsp;&nbsp;+<br />
                      <strong style={{ color: '#00A86C' }}>이동수단, 식당, 보험</strong> 등의 애로사항을 한번에 &nbsp;&nbsp;+<br />
                  </h6>
                </Col>
                <Col lg="6" md="12">
                  <SlideInSection imageSrc={require("assets/img/bg2.png")} width="calc(110px + 11vw)" />
                </Col>
              </Row>
            </Container>
           <Container style={{ margin: '10vh 0' }}>
              <Row>
                <Col lg="6" md="12">
                  <SlideInSection imageSrc={require("assets/img/bg3.png")} />
                </Col>
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
                  <h5 style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <strong>&nbsp;&nbsp;&nbsp;STEP 3.</strong> 프로그램 운영
                  </h5>
                  <h6 style={{ margin: '0' }}>
                    <ul class="plus-list" style={{ lineHeight: '1.5' }}>
                      <li><strong style={{ color: '#00A86C' }}>전문 운영팀</strong>과 <strong style={{ color: '#00A86C' }}>관광통역안내사</strong> 배치를 통한 체계화된 시스템</li>
                      <li>여행자의 <strong style={{ color: '#00A86C' }}>안전</strong>에 초점을 맞춘 운영</li>
                      <li>흥미와 선물을 동시에 챙길 수 있는 <strong style={{ color: '#00A86C' }}>체험형 프로그램</strong> 운영</li>
                    </ul>
                  </h6>
                </Col>
              </Row>
            </Container>
           <Container style={{ margin: '10vh 0' }}>
              <Row>
                <Col
                  lg="6"
                  md="12"
                  style={{
                    marginBottom: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: 'right',
                  }}
                >
                  <h5 style={{ marginTop: '30px', marginBottom: '10px' }}>
                    <strong>&nbsp;&nbsp;&nbsp;STEP 4.</strong> 결과 보고
                  </h5>
                  <h6 style={{ margin: '0' }}>
                      <strong style={{ color: '#00A86C' }}>2-3일</strong> 내로 받아볼 수 있는 상세 결과 보고서&nbsp;&nbsp;+<br />
                      높은 응답률을 기반으로 한 <strong style={{ color: '#00A86C' }}>만족도/피드백</strong> 공유&nbsp;&nbsp;+<br />
                      빠른 실행력으로 기사 노출을 통한 <strong style={{ color: '#00A86C' }}>언론 홍보</strong>&nbsp;&nbsp;+
                  </h6>
                </Col>
                <Col lg="6" md="12">
                  <SlideInSection imageSrc={require("assets/img/bg4.png")} width="calc(120px + 12vw)" />
                </Col>
              </Row>
            </Container>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h4
              style={{
                textAlign: "center",
                margin: "0.8vh",
              }}
            >
              지금 무료로 상담 받아보세요!
            </h4>
          <h6
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: "2vh",
              color: "#666"
            }}
          >
            아직 고민되시나요? <a href="www.example.com" style={{ color: '#00A86C', textDecoration: 'underline' }}>로컬트립가이드 매니저와 상담</a>해보세요.<br />
            맞춤형 프로그램 기획부터 견적 산출까지 무료로 상담해드립니다.
          </h6>
          
<a
  href="https://drive.google.com/file/d/1anJwDELyp2M6pJNY6GWXzYOlmRcgc2sw/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="custom-outline-button"><h6 style={{ margin: '5px' }}>서비스 소개서</h6></button>
</a>
          </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </Container>
        </div>
      </div>
      <KakaoChatButton />
    </>
  );
}

export default LocalTripGuideIntro;
