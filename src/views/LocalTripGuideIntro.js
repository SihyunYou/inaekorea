import React, { useState, useEffect, useRef } from "react";

// core components
import { Container, Button, Row, Col } from "reactstrap";
import {
  FaComments, 
  FaLightbulb,   
  FaBus,         
  FaClipboardCheck 
} from "react-icons/fa";
import InfiniteCarousel from "./index-sections/InfiniteCarousel.js";
import PortfolioViewer from "./index-sections/PortfolioViewer.js";
import HorizontalTimeline from "./index-sections/HorizontalTimeline.js";
import StatBox from "./index-sections/StatBox.js";
import SlideInSection from "./index-sections/SlideInSection.js";
import KakaoChatButton from "./index-sections/KakaoChatButton.js";
import PrimaryButton from "./index-sections/PrimaryButton.js";

const portfolioData = [
  {
    id: 1,
    name: "천안아산",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    contents: {
      "여행 프로그램": [
        { title: "외암 민속마을", hot: true },
        { title: "독립 기념관", hot: true },
        { title: "현충사", hot: false },
        { title: "뚜쥬루 돌가마 마을", hot: false },
      ],
      "체험 프로그램": [
        { title: "엿 만들기", hot: true },
        { title: "천연 염색", hot: false },
      ],
    },
  },
  {
    id: 2,
    name: "부여",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    contents: {
      "여행 프로그램": [
        { title: "백제 문화단지", hot: true },
        { title: "정림사지", hot: false },
      ],
      "체험 프로그램": [
        { title: "공예 체험", hot: true },
        { title: "백제 의복 체험", hot: true },
      ],
    },
  },
  {
    id: 3,
    name: "공주",
    image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    contents: {
      "여행 프로그램": [
        { title: "공산성", hot: true },
        { title: "공주 한옥마을", hot: true },
      ],
      "체험 프로그램": [
        { title: "백제 왕실복 체험", hot: true },
        { title: "삼색 인절미 체험", hot: true },
        { title: "족욕 체험", hot: false },
        { title: "전통 시장 체험", hot: false },
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
        { title: "대천 해수욕장", hot: true },
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
        { title: "경암동 철길 마을", hot: true },
      ],
      "체험 프로그램": [
        { title: "교복 체험", hot: true },
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
        { title: "전통 공예 체험", hot: true },
        { title: "한복 체험", hot: true },
      ],
    },
  },
];

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
                <strong style={{ color: '#00A86C' }}>로컬트립가이드</strong>
                의<br />파트너를 확인해보세요.
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
            <InfiniteCarousel images={["충남대", "남서울대", "나사렛대", "카이스트", "선문대", "백석대", "백석문화대", "순천향대"]} />
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
            <PortfolioViewer portfolioData={portfolioData} />

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
          <HorizontalTimeline steps={[
  {
    title: "프로그램 상담",
    icon: <FaComments />,
  },
  {
    title: "맞춤형 기획",
    icon: <FaLightbulb />,
  },
  {
    title: "프로그램 운영",
    icon: <FaBus />,
  },
  {
    title: "결과 보고",
    icon: <FaClipboardCheck />,
  }
]} />

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
                  <h6 style={{ margin: '0', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                    <ul class="plus-list" style={{ lineHeight: '1.5' }}>
                      <li>정확한 프로그램 기획을 위한 <strong style={{ color: '#00A86C' }}>1:1 고객 상담</strong></li>
                      <li><strong style={{ color: '#00A86C' }}>고객 맞춤형</strong> 프로그램을 위한 다각도 분석</li>
                      <li><strong style={{ color: '#00A86C' }}>메일</strong> 및 <strong style={{ color: '#00A86C' }}>카카오톡</strong>으로 상담 문의 가능</li>
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
                  <h6 style={{ margin: '0', lineHeight: '1.5', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      <strong style={{ color: '#00A86C' }}>맞춤형</strong> 운영 시스템, 이벤트 기획
    </span>
    <span>+</span>
  </li>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      편성 예산을 고려한 <strong style={{ color: '#00A86C' }}>최적</strong>의 견적 확보
    </span>
    <span>+</span>
  </li>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      <strong style={{ color: '#00A86C' }}>이동수단, 식당, 보험</strong> 등의 애로사항을 한번에
    </span>
    <span>+</span>
  </li>
</ul>
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
                  <h6 style={{ margin: '0', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                    <ul class="plus-list" style={{ lineHeight: '1.5' }}>
                      <li><strong style={{ color: '#00A86C' }}>전문 운영팀</strong> 배치를 통한 체계화된 시스템</li>
                      <li>여행자의 <strong style={{ color: '#00A86C' }}>안전</strong>에 초점을 맞춘 운영</li>
                      <li>흥미 가득 <strong style={{ color: '#00A86C' }}>체험형 프로그램</strong> 운영</li>
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
                  <h6 style={{ margin: '0', lineHeight: '1.5', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      <strong style={{ color: '#00A86C' }}>2-3일</strong> 내로 받아볼 수 있는 상세 결과 보고서
    </span>
    <span>+</span>
  </li>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      높은 응답률을 기반으로 한 <strong style={{ color: '#00A86C' }}>만족도/피드백</strong> 공유
    </span>
    <span>+</span>
  </li>
  <li style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '8px' }}>
    <span>
      빠른 실행력으로 기사 노출을 통한 <strong style={{ color: '#00A86C' }}>언론 홍보</strong>
    </span>
    <span>+</span>
  </li>
</ul>
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

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
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
            아직 고민되시나요? <strong style={{ color: '#00A86C' }}>로컬트립가이드 매니저</strong>와 상담해보세요.<br />
            맞춤형 프로그램 기획부터 견적 산출까지 무료로 상담해드립니다.
          </h6>
          
<a
  href="https://drive.google.com/file/d/1anJwDELyp2M6pJNY6GWXzYOlmRcgc2sw/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <PrimaryButton>
    <h6>카카오톡 상담하기</h6>
  </PrimaryButton>
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
