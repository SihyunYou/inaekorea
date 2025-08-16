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
import VerticalTimeline from "./index-sections/VerticalTimeline.js";
import { StatBoxes } from "./index-sections/StatBox.js";
import SlideInSection from "./index-sections/SlideInSection.js";
import ChannelTalkButton from "./index-sections/ChannelTalkButton.js";
import PrimaryButton from "./index-sections/PrimaryButton.js";
import StepSection from './index-sections/StepSection';
import SectionHeader from "./index-sections/SectionHeader.js";
import { generateGreenGradient } from "./utils/Color.js";

import header1 from "assets/img/header1.webp";
import logo from "assets/img/logo-localtripguide.webp";

const greenColors = generateGreenGradient(5);

const VERTICAL_ITEMS = [
  {
    date: "D-14",
    title: "킥오프 미팅",
    subtitle: "고객사의 니즈를 파악합니다.",
    details: ["프로그램 테마", "예산 / 일정 / 규모 등"],
    icon: <FaFlagCheckered />,
    bgColor: greenColors[0]
  },
  {
    date: "D-10",
    title: "맞춤형 기획",
    subtitle: "니즈에 맞는 운영기획안을 제작합니다.",
    details: ["맞춤형 프로그램 기획", "예산 확정", "운영기획안 제공"],
    icon: <FaClipboardList />,
    bgColor: greenColors[1]
  },
  {
    date: "D-7",
    title: "프로그램 준비",
    subtitle: "프로그램의 필요한 요소들을 제작하고 준비합니다.",
    details: [
      "계약 및 보증보험 가입 등",
      "목걸이, 현수막 등 제작",
      "참여자 명단 확보",
      "필드크루 배치",
      "디지털 QR 시스템 제작",
    ],
    icon: <FaCogs />,
    bgColor: greenColors[2]
  },
  {
    date: "D-DAY",
    title: "현장 운영",
    subtitle: "안전하고 원활한 운영을 통해 프로그램을 성공적으로 마무리합니다.",
    details: ["출석부 제공", "종교 및 문화에 따른 식단 반영", "만족도 조사"],
    icon: <FaTruck />,
    bgColor: greenColors[3]
  },
  {
    date: "D+7",
    title: "결과 보고",
    subtitle: "데이터 기반의 결과 보고서 및 후속 업무를 진행합니다.",
    details: [
      "데이터 기반의 결과보고서 제작",
      "AI 분석을 통한 만족도 데이터 제공",
      "보도자료 및 SNS 홍보 진행",
      "사진/영상 데이터 제공",
    ],
    icon: <FaChartLine />,
    bgColor: greenColors[4]
  },
];

const TIMELINE_STEPS = [
  { title: "프로그램 상담", icon: <FaComments /> },
  { title: "맞춤형 기획", icon: <FaLightbulb /> },
  { title: "프로그램 운영", icon: <FaBus /> },
  { title: "결과 보고", icon: <FaClipboardCheck /> },
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
    end: 1500, 
    suffix: "+", 
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
    end: 50, 
    suffix: "%", 
    label: "로트가 성장률", 
    duration: 3
  },
  { 
    imgSrc: "fruit4.webp", 
    end: 20, 
    suffix: "+", 
    label: "보유 프로그램 수", 
    duration: 4
  }
];

const CAROUSEL_IMAGES1 = [
  "충남대", "남서울대", "나사렛대", "카이스트", 
  "선문대", "중부대", "백석문화대", "순천향대"
];
const CAROUSEL_IMAGES2 = [
  "아트뮤", "백제문화단지", "사비공예마을",   "부여군", "아트뮤", "백제문화단지", "사비공예마을",   "부여군"
];

const SECTION_HEADERS = {
  stats1: {
mainText: "외국인 유학생 대상<strong style='color:#00A86A'> 문화/직무 체험</strong><br />프로그램 때문에 고민이신가요?"
  },
  stats2: {
  mainText: "검증된 솔루션, <strong style='color:#00A86A'>로컬트립가이드</strong>의<br />실적을 확인해보세요."
  },
  partners: {
    mainText: "이미 많은 대학교 및 회사가<br /><strong style='color:#00A86A'>로컬트립가이드</strong>를 도입하고 있습니다."
  },
  function: {
    mainText: "<strong>로컬트립가이드 통합 솔루션</strong>을 통해<br />다양한 프로그램을 기획/운영/보고 할 수 있습니다."
  },
  process: {
    mainText: "<strong>로컬트립가이드</strong>는 어떻게 진행되나요?",
  },
  consultation: {
    mainText: "외국인 유학생 맞춤형 프로그램의 시작",
    subText: "로컬트립가이드와 함께"
  }
};

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
              <meta property="og:title" content="로컬트립가이드" />
              <meta property="og:description" content="문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션, 로컬트립가이드가 완성합니다." />
              <meta property="og:image" content="/logo.jpg" />
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
                                <SectionHeader {...SECTION_HEADERS.stats1} />
                                <Spacer />
                                <StatBoxes statsData={STATS_DATA1} styleOption={1} />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.partners} />
                                <Spacer />
                                <Performance images1={CAROUSEL_IMAGES1} images2={CAROUSEL_IMAGES2} />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.stats2} />
                                <Spacer />
                                <StatBoxes statsData={STATS_DATA2} styleOption={0} />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.function} />
                                <Spacer />
                                <MultiTabAccordion />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.process} />
                                <Spacer />
                                <VerticalTimeline items={VERTICAL_ITEMS} />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.consultation} />
                                <Spacer />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
                                <PrimaryButton 
                                    inverse={true}
                                    tag="p"
                                >
                                     &nbsp;&nbsp;&nbsp;&nbsp;문의하기&nbsp;&nbsp;&nbsp;&nbsp;
                                </PrimaryButton>
                                <PrimaryButton 
                                    href={PROPOSAL_LINK}
                                    tag="p"
                                >
                                    서비스 소개서 >
                                </PrimaryButton>
                                </div>
                                <Spacer count={15} />
                            </Container>
                        </div>
                        <DarkFooter />
                    </div>
                </div>
            </div>
            <ChannelTalkButton />
        </>
    );
}

export default LocalTripGuide;

