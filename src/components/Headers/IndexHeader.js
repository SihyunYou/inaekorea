import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hangul from "hangul-js";
import "./IndexHeader.css";

function KoreanTypewriter({ text, start }) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (!start) return;
        const chars = Hangul.disassemble(text);
        let i = 0;

        const type = () => {
            if (i <= chars.length) {
                const current = Hangul.assemble(chars.slice(0, i));
                setDisplay(current);
                i++;
                const delay = Math.random() * 150 + 80;
                setTimeout(type, delay);
            }
        };
        type();
    }, [text, start]);

    return (
<span style={{ position: "relative", display: "inline-block" }}>
  <span style={{ visibility: "hidden" }}>{text}</span>
  <span style={{ position: "absolute", top: 0, left: 0 }}>
    {display}
    <span className="cursor"></span>
  </span>
</span>
    );
}

function IndexHeader({ isReady }) {
    const pageHeader = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [typewriterStarted, setTypewriterStarted] = useState(false);
    const [sliderReady, setSliderReady] = useState(false);

    const slideImages = [require("assets/img/header1.webp")];

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
        onInit: () => setSliderReady(true), // ✅ 초기화 끝나면 보여주기
    };

    useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                if (pageHeader.current) {
                    pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
                }
            };
            updateScroll(); // ✅ 처음 렌더 시에도 한 번 실행
            window.addEventListener("scroll", updateScroll);
            return () => window.removeEventListener("scroll", updateScroll);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setTypewriterStarted(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className={`testimonials fade-in ${isReady ? "show" : ""}`}
            ref={pageHeader}
        >
            {isReady && (
                <>
                    <div
                        className="text-overlay"
                        style={{ margin: "0 4vw", marginTop: "8vh" }}
                    >
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
                                {typewriterStarted ? (
                                    <KoreanTypewriter text="로컬트립가이드" start={true} />
                                ) : (
                                    "로컬트립가이드"
                                )}
                            </span>
                            &nbsp;가 완성합니다.
                        </h6>

                        <br />
                        <br />
                        <a href="http://pf.kakao.com/_yUxden">
                            <button className="btn-solid">
                                <p>
                                    <strong>문의하기</strong>
                                </p>
                            </button>
                        </a>
                        <a href="./LocalTripGuide.pdf" download="LocalTripGuide.pdf">
                            <button
                                className="btn-outline"
                                style={{
                                    marginLeft: "calc(4px + 0.8vw)",
                                    textDecoration: "none",
                                    display: "inline-block",
                                }}
                            >
                                <p>
                                    <strong>서비스 소개서 &gt;</strong>
                                </p>
                            </button>
                        </a>
                    </div>

                    {/* ✅ 초기화 전 opacity 0 → slick 준비 후 1 */}
                    <div
                        style={{
                            opacity: sliderReady ? 1 : 0,
                            transition: "opacity 0.6s ease-in",
                        }}
                    >
                        <Slider {...settings}>
                            {slideImages.map((src, idx) => (
                                <div key={idx} className="slide-container">
                                    <img
                                        className={`slide-image ${
                                            idx === activeIndex ? "active" : ""
                                        }`}
                                        src={src}
                                        alt={`slide-${idx}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </>
            )}
        </section>
    );
}

export default IndexHeader;
