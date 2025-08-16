import React, { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typewriter } from "react-simple-typewriter";
import './IndexHeader.css';

function IndexHeader({ isReady }) {
    const pageHeader = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [typewriterStarted, setTypewriterStarted] = useState(false);

    const slideImages = [
        require("assets/img/header1.webp"),
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        afterChange: (current) => setActiveIndex(current),
    };

    useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                if (pageHeader.current) {
                    pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
                }
            };
            window.addEventListener("scroll", updateScroll);
            return () => window.removeEventListener("scroll", updateScroll);
        }
    }, []);

    // 타자기 시작 지연 (예: 1초 후)
    useEffect(() => {
        const timer = setTimeout(() => setTypewriterStarted(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className={`testimonials fade-in ${isReady ? 'show' : ''}`}
            ref={pageHeader}
        >
            {isReady && (
                <>
                    <div className="text-overlay" style={{ margin: '0 4vw', marginTop: '8vh' }}>
                        <h2>
                            우리 대학에 꼭 맞는<br />
                            외국인 유학생 프로그램을 찾고 계신가요?
                        </h2>
                        <h6
                            style={{
                                color: "#CCC",
                                marginRight: "10vw",
                                whiteSpace: "normal",
                                wordBreak: "keep-all",
                                overflowWrap: "break-word",
                            }}
                        >
                            문화체험부터 직무체험까지 대학교 맞춤형 통합 솔루션,&nbsp;
                            <span
                                style={{
                                    backgroundColor: "#00a859",
                                    color: "#fff",
                                    padding: "2px 6px",
                                    fontWeight: "700",
                                    borderRadius: "4px",
                                    display: "inline-block",
                                    minWidth: "calc(100px + 5vw)",
                                    textAlign: "center",
                                }}
                            >
                                {typewriterStarted && (
                                    <Typewriter
                                        words={["로컬트립가이드"]}
                                        typeSpeed={330}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                )}
                                {!typewriterStarted && "로컬트립가이드"} {/* 미리 공간 확보 */}
                            </span>
                            &nbsp;가 완성합니다.
                        </h6>

                        <br /><br />
                        <button className="btn-solid">
                            <p><strong>문의하기</strong></p>
                        </button>

                        <button className="btn-outline" style={{ marginLeft: 'calc(4px + 0.8vw)' }}>
                            <p><strong>서비스 소개서 ></strong></p>
                        </button>
                    </div>

                    <Slider {...settings}>
                        {slideImages.map((src, idx) => (
                            <div key={idx} className="slide-container">
                                <img
                                    className={`slide-image ${idx === activeIndex ? 'active' : ''}`}
                                    src={src}
                                    alt={`slide-${idx}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </>
            )}
        </section>
    );
}

export default IndexHeader;
