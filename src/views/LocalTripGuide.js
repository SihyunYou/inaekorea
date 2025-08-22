import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Button, Row, Col } from "reactstrap";
import { FaPenNib, FaComments, FaLightbulb, FaBus, FaClipboardCheck, FaCompass, FaFlagCheckered, FaClipboardList, FaCogs, FaTruck, FaChartLine } from "react-icons/fa";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Spacer from "./utils/Spacer.js";
import CardSection from "./index-sections/CardSection.js";
import Performance from "./index-sections/Performance.js";
import MultiTabAccordion from "./index-sections/MultiTabAccordion.js";
import Timeline from "./index-sections/Timeline.js";
import { StatBoxes } from "./index-sections/StatBox.js";
import SlideInSection from "./index-sections/SlideInSection.js";
import KakaoChatButton from "./index-sections/KakaoChatButton.js";
import PrimaryButton from "./index-sections/PrimaryButton.js";
import StepSection from './index-sections/StepSection';
import ProgramSection from "./index-sections/ProgramSection.js";
import BlogSection from "./index-sections/BlogSection.js";
import { generateGreenGradient } from "./utils/Color.js";

import header1 from "assets/img/header1.webp";
import logo from "assets/img/logo-localtripguide.webp";

const greenColors = generateGreenGradient(5);

const steps = [
    {
        id: 1,
        title: "킥오프 미팅 (D-14)",
        description: "고객사의 니즈를 파악합니다.",
        addition: ["프로그램 테마", "예산 / 일정 / 규모 등"],
    },
    {
        id: 2,
        title: "맞춤형 기획 (D-10)",
        description: "니즈에 맞는 운영기획안을 제작합니다.",
        addition: ["맞춤형 프로그램 기획", "예산 확정", "운영기획안 제공"],
    },
    {
        id: 3,
        title: "프로그램 준비 (D-7)",
        description: "프로그램의 필요한 요소들을 제작하고 준비합니다.",
        addition: [
            "계약 및 보증보험 가입 등",
            "목걸이, 현수막 등 제작",
            "참여자 명단 확보",
            "필드크루 배치",
            "디지털 QR 시스템 제작",
        ],
    },
    {
        id: 4,
        title: "현장 운영 (D-DAY)",
        description: "안전하고 원활한 운영을 통해<br />프로그램을 성공적으로 마무리합니다.",
        addition: ["출석부 제공", "종교 및 문화에 따른 식단 반영", "만족도 조사"],
    },
    {
        id: 5,
        title: "결과 보고 (D+7)",
        description: "데이터 기반의 결과 보고서<br />및 후속 업무를 진행합니다.",
        addition: [
            "데이터 기반의 결과보고서 제작",
            "AI 분석을 통한 만족도 데이터 제공",
            "보도자료 및 SNS 홍보 진행",
            "사진/영상 데이터 제공",
        ],
    },
];

const STATS_DATA1 = [
  { 
    imgSrc: "home_1_1.png", 
    label: "다양한 프로그램<br /><strong>기획의 어려움</strong>",
  },
  { 
    imgSrc: "home_1_2.png", 
    label: "대규모, 다국적 외국인<br /><strong>운영의 어려움</strong>",
  },
  { 
    imgSrc: "home_1_3.png", 
    label: "결과보고서<br /><strong>작성의 어려움</strong>",
  },
];

const STATS_DATA2 = [
  { 
    imgSrc: "fruit2.webp", 
    end: 2363, 
    suffix: "명", 
    label: "참여 유학생", 
    duration: 2
  },
  { 
    imgSrc: "fruit1.webp", 
    end: 95, 
    suffix: "%", 
    label: "대학교 재계약률", 
    duration: 3
  },
  { 
    imgSrc: "fruit3.webp", 
    end: 428, 
    suffix: "%", 
    label: "학기별 성장률", 
    duration: 3
  },
  { 
    imgSrc: "fruit4.webp", 
    end: 18, 
    suffix: "건", 
    label: "프로그램 포트폴리오", 
    duration: 4
  }
];

const CAROUSEL_IMAGES1 = [
  "충남대", "남서울대", "나사렛대", "카이스트", 
  "선문대", "중부대", "백석문화대", "순천향대"
];
const CAROUSEL_IMAGES2 = [
  "함초롬", "아트뮤",  "사비공예마을", "부여군",   "함초롬", "아트뮤", "사비공예마을", "부여군",
];


const headerImage = "/assets/img/header1.webp";
const logoImage = "/assets/img/logo-localtripguide.webp";
const PROPOSAL_LINK = "https://onedrive.live.com/?id=2044BB39C7BE1AA8%21s85cba87d1f304f29a0c6eb0d54e0b490&cid=2044BB39C7BE1AA8&parId=2044BB39C7BE1AA8%21134666&sb=name&sd=1&o=OneUp&ls=true";

function LocalTripGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "로컬트립가이드",
    description: "문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션, 로컬트립가이드가 완성합니다.",
    datePublished: "2025-08-08",
    author: {
      "@type": "Organization",
      name: "LocalTripGuide",
    },
    image: "/logo.jpg",
    publisher: {
      "@type": "Organization",
      name: "LocalTripGuide",
      logo: {
        "@type": "ImageObject",
        url: "/logo.jpg",
      },
    },
  };

    const [isReady, setIsReady] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

useEffect(() => {
  const head = document.head;
  const images = [header1, logo];
  let loaded = 0;

  images.forEach((src) => {
    // preload 링크 추가
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    head.appendChild(link);

    // 이미지 로딩 체크
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loaded += 1;
      if (loaded === images.length) {
        setTimeout(() => setIsReady(true), 200);
      }
    };
    img.onerror = () => {
      loaded += 1;
      if (loaded === images.length) {
        setTimeout(() => setIsReady(true), 200);
      }
    };
  });

  return () => {
    images.forEach((src) => {
      const links = document.querySelectorAll(`link[rel="preload"][href="${src}"]`);
      links.forEach((link) => link.remove());
    });
  };
}, []);

    return (
        <>
            <Helmet>
              <title>로컬트립가이드</title>
              <meta name="description" content="문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션, 로컬트립가이드가 완성합니다." />
              <meta name="keywords" content="외국인, 유학생, 대학교, 국제교류처, 여행, 문화체험, 직무체험" />
              <meta property="og:title" content="로컬트립가이드" />
              <meta property="og:description" content="우리 대학에 꼭 맞는 외국인 유학생 프로그램을 찾고 계신가요?" />
              <meta property="og:image" content="/square-logo.jpg" />
              <meta property="og:type" content="website" />
              <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Helmet>
            <div className={`fade-wrapper ${isReady ? 'fade-in' : ''}`}>
                <div className="fade-content">
                    <IndexNavbar isReady={isReady} />
                    <div className="wrapper">
                        <IndexHeader isReady={isReady} />
                        <div className="main">
                            <Spacer count={10} />
                            <Container>
<h5 style={{ textAlign: 'center' }}>
    외국인 유학생 대상
    <strong style={{ color: "#00A86A" }}> 문화/직무 체험</strong>
    <br />
    프로그램 때문에 고민이신가요?
</h5>
<Spacer />
<StatBoxes statsData={STATS_DATA1} styleOption={1} />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    이미 많은 대학교 및 회사가
    <br />
    <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>를 도입하고 있습니다.
</h5>
<Spacer />
<Performance images1={CAROUSEL_IMAGES1} images2={CAROUSEL_IMAGES2} />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    검증된 솔루션, <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>의
    <br />
    실적을 확인해보세요.
</h5>
<Spacer />
<StatBoxes statsData={STATS_DATA2} styleOption={0} />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    <strong style={{ color: "#00A86A" }}>로컬트립가이드 통합 솔루션</strong>을 통해
    <br />
    다양한 프로그램을 기획/운영/보고 할 수 있습니다.
</h5>
<Spacer />
<MultiTabAccordion />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>는
    <br />
    어떻게 진행되나요?
</h5>
<Spacer />
<Timeline data={steps} />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    <strong style={{ color: "#00A86A" }}>로컬 콘텐츠</strong>를 활용한 다양한
    <br />
    문화/직무체험 프로그램들이 준비되어 있습니다.
</h5>
<Spacer />
<ProgramSection />
<Spacer count={15} />

<h5 style={{ textAlign: 'center' }}>
    <strong style={{ color: "#00A86A" }}>로컬트립가이드</strong>의 문화/직무체험
    <br />
    프로그램들에 대해 더 궁금하신가요?
</h5>
<Spacer />
<BlogSection />
<Spacer count={15} />
                            </Container>
                        </div>
                                <div style={{ backgroundColor: '#2c2c2c', color: 'white' }}>
                                <Spacer count={8} />
                               <h5 style={{ textAlign: 'center' }}>외국인 유학생 맞춤형 프로그램의 시작</h5>
                               <h6 style={{ textAlign: 'center' }}><strong style={{ color: '#00A86C' }}>로컬트립가이드</strong>와 함께</h6><br />
                                <Spacer />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                                <PrimaryButton
                                    onClick={() => window.open("http://pf.kakao.com/_yUxden", "_blank")} 
                                    inverse={true}
                                    tag="h6"
                                >
                                     &nbsp;&nbsp;&nbsp;&nbsp;문의하기&nbsp;&nbsp;&nbsp;&nbsp;
                                </PrimaryButton>
<PrimaryButton
    onClick={() => {
        const link = document.createElement("a");
        link.href = "/LocalTripGuide.pdf";      // public 폴더에 있는 파일
        link.download = "LocalTripGuide.pdf";   // 저장될 파일 이름 (옵션)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }}
    inverse={false}
    tag="h6"
>
                                    서비스 소개서 >
                                </PrimaryButton>
                                </div>
                                <Spacer count={8} />
                                </div>
                        <DarkFooter />
                    </div>
                </div>
            </div>
            <KakaoChatButton />
        </>
    );
}

export default LocalTripGuide;

