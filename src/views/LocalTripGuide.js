import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Button, Row, Col } from "reactstrap";
import { FaPenNib, FaComments, FaLightbulb, FaBus, FaClipboardCheck, FaCompass } from "react-icons/fa";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Spacer from "./utils/Spacer.js";
import CardSection from "./index-sections/CardSection.js";
import Performance from "./index-sections/Performance.js";
import HorizontalTimeline from "./index-sections/HorizontalTimeline.js";
import { StatBoxes } from "./index-sections/StatBox.js";
import SlideInSection from "./index-sections/SlideInSection.js";
import ChannelTalkButton from "./index-sections/ChannelTalkButton.js";
import PrimaryButton from "./index-sections/PrimaryButton.js";
import StepSection from './index-sections/StepSection';
import SectionHeader from "./index-sections/SectionHeader.js";

import header1 from "assets/img/header1.webp";
import logo from "assets/img/logo-localtripguide.webp";

const CARDS = [
  {
    title: "<strong>프로그램 기획</strong>의 어려움",
    image: "Write.gif"
  },
  {
    title: "<strong>대규모, 다국적</strong> 외국인<br />운영의 어려움",
    image: "Communication.gif"
  },
  {
    title: "<strong>결과보고서</strong> 작성의 어려움",
    image: "Notepad.gif"
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: '프로그램 상담',
    imageSrc: require('assets/img/bg1.webp'),
    imagePosition: 'left',
    imageWidth: 'calc(150px + 15vw)',
    descriptionList: [
      '정확한 기획을 위한 <strong style="color:#00A86C">1:1 고객 상담</strong>',
      '<strong style="color:#00A86C">맞춤형</strong> 프로그램을 위한 다각도 분석',
      '<strong style="color:#00A86C">메일</strong> 및 <strong style="color:#00A86C">카카오톡</strong>으로 상담 문의 가능',
    ]
  },
  {
    step: 2,
    title: '맞춤형 기획',
    imageSrc: require('assets/img/bg2.webp'),
    imagePosition: 'right',
    imageWidth: 'calc(110px + 11vw)',
    descriptionList: [
      '<strong style="color:#00A86C">맞춤형</strong> 운영 시스템, 이벤트 기획',
      '편성 예산을 고려한 <strong style="color:#00A86C">최적</strong>의 견적 확보',
      '<strong style="color:#00A86C">이동, 식당, 보험</strong> 등의 애로사항을 한번에',
    ]
  },
  {
    step: 3,
    title: '프로그램 운영',
    imageSrc: require('assets/img/bg3.webp'),
    imagePosition: 'left',
    descriptionList: [
      '<strong style="color:#00A86C">전문 운영팀</strong> 배치로 체계화된 시스템',
      '여행자의 <strong style="color:#00A86C">안전</strong>에 초점을 맞춘 운영',
      '흥미 가득 <strong style="color:#00A86C">체험형 프로그램</strong> 운영',
    ]
  },
  {
    step: 4,
    title: '결과 보고',
    imageSrc: require('assets/img/bg4.webp'),
    imagePosition: 'right',
    imageWidth: 'calc(110px + 11vw)',
    descriptionList: [
      '<strong style="color:#00A86C">2-3일</strong> 내 제공 가능한 상세 결과 보고서',
      '높은 응답률의 <strong style="color:#00A86C">만족도/피드백</strong> 공유',
      '기사 노출을 통한 <strong style="color:#00A86C">언론 홍보</strong>'
    ]
  }
];

const TIMELINE_STEPS = [
  { title: "프로그램 상담", icon: <FaComments /> },
  { title: "맞춤형 기획", icon: <FaLightbulb /> },
  { title: "프로그램 운영", icon: <FaBus /> },
  { title: "결과 보고", icon: <FaClipboardCheck /> },
];

const STATS_DATA = [
  { 
    imgSrc: "fruit1.webp", 
    end: 10, 
    suffix: "+", 
    label: "참여 대학", 
    duration: 5 
  },
  { 
    imgSrc: "fruit2.webp", 
    end: 1500, 
    suffix: "+", 
    label: "참여 유학생", 
    duration: 2, 
    marginTop: "10vh" 
  },
  { 
    imgSrc: "fruit3.webp", 
    end: 50, 
    suffix: "+", 
    label: "진행 프로그램 수", 
    duration: 4 
  },
  { 
    imgSrc: "fruit4.webp", 
    end: 20, 
    suffix: "+", 
    label: "보유 프로그램 수", 
    duration: 4, 
    marginTop: "10vh" 
  }
];

const CAROUSEL_IMAGES = [
  "충남대", "남서울대", "나사렛대", "카이스트", 
  "선문대", "백석대", "백석문화대", "순천향대"
];

const SECTION_HEADERS = {
  stats: {
    mainText: "외국인 유학생 대상<br /><strong>문화체험 프로그램</strong> 때문에 고민이신가요?"
  },
  partners: {
    mainText: "이미 많은 대학교가<br /><strong>로컬트립가이드</strong>를 도입하고 있습니다."
  },
  portfolio: {
    mainText: "로컬트립가이드의<br />포트폴리오를 확인해보세요!",
    subText: "고객을 위한 수많은 프로그램과 콘텐츠가 준비되어 있습니다."
  },
  process: {
    mainText: "로컬트립가이드는<br />체계적인 프로세스로 이루어집니다.",
    subText: "처음부터 끝까지, 로컬트립가이드가 책임지고 문화체험 운영을 도와드립니다."
  },
  consultation: {
    mainText: "아직 고민되시나요?<br />로컬트립가이드 매니저와 상담해보세요.",
    subText: "맞춤형 프로그램 기획부터 견적 산출까지 무료로 상담해드립니다."
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
    image: "https://example.com/logo.png",
    publisher: {
      "@type": "Organization",
      name: "LocalTripGuide",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.png",
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
              <meta property="og:image" content="https://example.com/logo.png" />
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
                                <SectionHeader {...SECTION_HEADERS.stats} />
                                <Spacer />
                                <CardSection cards={CARDS} />
                                <Spacer count={15} />

                                <SectionHeader {...SECTION_HEADERS.partners} />
                                <Spacer />
                                <Performance images={CAROUSEL_IMAGES} />
                                <Spacer count={12} />

                                <SectionHeader {...SECTION_HEADERS.process} />

                                <HorizontalTimeline steps={TIMELINE_STEPS} />

                                <Spacer count={2} />

                                {PROCESS_STEPS.map((section, idx) => (
                                    <StepSection key={idx} {...section} />
                                ))}

                                <Spacer count={8} />

                                <SectionHeader {...SECTION_HEADERS.consultation} />
                                <Spacer />
                                <PrimaryButton 
                                    href={PROPOSAL_LINK}
                                    tag="h6"
                                >
                                    제안서 바로가기
                                </PrimaryButton>

                                <Spacer count={10} />
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