import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { FaComments, FaLightbulb, FaBus, FaClipboardCheck } from "react-icons/fa";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Spacer from "./utils/Spacer.js";
import InfiniteCarousel from "./index-sections/InfiniteCarousel.js";
import PortfolioViewer from "./index-sections/PortfolioViewer.js";
import HorizontalTimeline from "./index-sections/HorizontalTimeline.js";
import { StatBoxes } from "./index-sections/StatBox.js";
import SlideInSection from "./index-sections/SlideInSection.js";
import ChannelTalkButton from "./index-sections/ChannelTalkButton.js";
import PrimaryButton from "./index-sections/PrimaryButton.js";
import StepSection from './index-sections/StepSection';
import SectionHeader from "./index-sections/SectionHeader.js";

import header1 from "assets/img/header1.jpg";
import logo from "assets/img/logo-localtripguide.png";

const PORTFOLIO_DATA = [
  {
    id: 1,
    name: "천안아산",
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

const PROCESS_STEPS = [
  {
    step: 1,
    title: '프로그램 상담',
    imageSrc: require('assets/img/bg1.png'),
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
    imageSrc: require('assets/img/bg2.png'),
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
    imageSrc: require('assets/img/bg3.png'),
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
    imageSrc: require('assets/img/bg4.png'),
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
    imgSrc: "fruit1.png", 
    end: 10, 
    suffix: "+", 
    label: "참여 대학", 
    duration: 5 
  },
  { 
    imgSrc: "fruit2.png", 
    end: 1500, 
    suffix: "+", 
    label: "참여 유학생", 
    duration: 2, 
    marginTop: "10vh" 
  },
  { 
    imgSrc: "fruit3.png", 
    end: 50, 
    suffix: "+", 
    label: "진행 프로그램 수", 
    duration: 4 
  },
  { 
    imgSrc: "fruit4.png", 
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
    mainText: "로컬트립가이드는<br />검증된 솔루션입니다.",
    subText: "이미 많은 대학과 학생들이 로컬트립가이드를 경험했습니다."
  },
  partners: {
    mainText: "로컬트립가이드의<br />파트너를 확인해보세요.",
    subText: "로컬트립가이드는 수많은 네트워크를 보유 중입니다."
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

const PROPOSAL_LINK = "https://onedrive.live.com/?id=2044BB39C7BE1AA8%21s85cba87d1f304f29a0c6eb0d54e0b490&cid=2044BB39C7BE1AA8&parId=2044BB39C7BE1AA8%21134666&sb=name&sd=1&o=OneUp&ls=true";

function LocalTripGuide() {
    const [isReady, setIsReady] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const images = [header1, logo];
        let loaded = 0;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loaded += 1;
                if (loaded === images.length) {
                    setTimeout(() => setIsReady(true), 200); // 부드럽게 딜레이
                }
            };
        });
    }, []);

    return (
        <>
            <div className={`fade-wrapper ${isReady ? 'fade-in' : ''}`}>
                <div className="fade-content">
                    <IndexNavbar isReady={isReady} />
                    <div className="wrapper">
                        <IndexHeader isReady={isReady} />
                        <div className="main">
                            <Spacer count={8} />

                            <SectionHeader {...SECTION_HEADERS.stats} />

                            <Container>
                                <StatBoxes statsData={STATS_DATA} />

                                <Spacer count={12} />

                                <SectionHeader {...SECTION_HEADERS.partners} />

                                <InfiniteCarousel images={CAROUSEL_IMAGES} />

                                <Spacer count={12} />

                                <SectionHeader {...SECTION_HEADERS.portfolio} />

                                <PortfolioViewer portfolioData={PORTFOLIO_DATA} />

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