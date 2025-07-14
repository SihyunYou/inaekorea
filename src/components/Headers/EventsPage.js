import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ScrollMagic from "scrollmagic";
import "./IndexHeader.css";

function EventsPage() {
  const loaderVideoRef = useRef(null);
  const preloaderRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onScroll = () => {
      if (!scrollBtnRef.current) return;
      scrollBtnRef.current.classList.toggle("move", window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);

    // Preloader text fade in/out
    firstTextRef.current && (firstTextRef.current.style.opacity = "1");
    setTimeout(() => {
      firstTextRef.current && (firstTextRef.current.style.opacity = "0");
      secondTextRef.current && (secondTextRef.current.style.opacity = "1");
    }, 1000);
    setTimeout(() => {
      preloaderRef.current && (preloaderRef.current.style.display = "none");
    }, 4000);

    // 비디오 초기 스타일 설정 (2초 후 중앙 확대)
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");

    const videoWrapper = loaderVideoRef.current;
    if (!videoWrapper) return;

    const video = videoWrapper.querySelector("video");

    // 초기 확대
    setTimeout(() => {
      videoWrapper.style.width = "90%";
      videoWrapper.style.height = "90%";
      videoWrapper.style.transform = "translate(-50%, -50%)";
      videoWrapper.style.top = "50%";
      videoWrapper.style.left = "50%";
      videoWrapper.style.position = "fixed";
      videoWrapper.style.borderRadius = "12px";
    }, 2000);

    // 3초 후 반응형 위치 조정
    setTimeout(() => {
      const vw = window.innerWidth;
      if (vw <= 576) {
        videoWrapper.style.width = "220px";
        videoWrapper.style.height = "220px";
        videoWrapper.style.top = "25%";
        videoWrapper.style.left = "24px";
        videoWrapper.style.right = "auto";
        videoWrapper.style.transform = "translate(0%, -25%)";
      } else if (vw <= 767) {
        videoWrapper.style.width = "220px";
        videoWrapper.style.height = "220px";
        videoWrapper.style.left = "auto";
        videoWrapper.style.right = "40px";
        videoWrapper.style.transform = "translate(0%, -50%)";
      } else if (vw <= 991) {
        videoWrapper.style.width = "310px";
        videoWrapper.style.height = "310px";
        videoWrapper.style.left = "auto";
        videoWrapper.style.right = "40px";
        videoWrapper.style.transform = "translate(0%, -50%)";
      } else if (vw <= 1199) {
        videoWrapper.style.width = "400px";
        videoWrapper.style.height = "400px";
        videoWrapper.style.left = "auto";
        videoWrapper.style.right = "60px";
        videoWrapper.style.transform = "translate(0%, -50%)";
      } else if (vw <= 1399) {
        videoWrapper.style.width = "450px";
        videoWrapper.style.height = "450px";
        videoWrapper.style.left = "auto";
        videoWrapper.style.right = "80px";
        videoWrapper.style.transform = "translate(0%, -50%)";
      } else {
        videoWrapper.style.width = "500px";
        videoWrapper.style.height = "500px";
        videoWrapper.style.left = "auto";
        videoWrapper.style.right = "100px";
        videoWrapper.style.transform = "translate(0%, -50%)";
        videoWrapper.style.top = "50%";
        videoWrapper.style.position = "absolute";
      }
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }, 3000);
  }, []);

useEffect(() => {
  const controller = new ScrollMagic.Controller({ loglevel: 3 });

  // 섹션 ID만 직접 지정
  const scenes = [
    { trigger: "#section2", pin: "#section1 .pinWrapper", duration: "100%" },
    { trigger: "#section2", pin: "#section2 .pinWrapper", duration: "200%" },
    { trigger: "#section3", pin: "#section3 .pinWrapper", duration: "200%" },
    { trigger: "#section4", pin: "#section4 .pinWrapper", duration: "100%" },
  ];

  scenes.forEach(({ trigger, pin, duration }) => {
    new ScrollMagic.Scene({
      triggerElement: trigger,
      triggerHook: "onEnter",
      duration: duration,
    })
      .setPin(pin, { pushFollowers: false })
      .addTo(controller);
  });

  return () => controller.destroy(true);
}, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader" ref={preloaderRef}>
        <div className="text-wrapper">
          <h1 id="first-text" ref={firstTextRef}>Studio R</h1>
          <h3 id="second-text" ref={secondTextRef}>Creative Agency</h3>
        </div>
      </div>

      {/* Main Sections */}
      <section className="events-page">
        <div id="section1" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2 style={{ color: 'white', fontSize: 'calc(18px + 1.8vw)' }}>대학교 <strong style={{ color: "#00A86C", fontWeight: '800' }}>국제교류처</strong>를 위한<br />외국인 유학생 <strong style={{ color: "#00A86C", fontWeight: '800' }}>문화체험</strong> 통합 솔루션</h2>
<img
  alt="..."
  src={require("assets/img/logo-localtripguide.png")}
  style={{
    width: 'calc(120px + 22vw)', 
    height: 'auto',              
    display: 'block'       
  }}
/>
            </div>
            <div className="image" id="loaderVideo" ref={loaderVideoRef}>
              <video autoPlay loop muted playsInline>
                <source src="https://www.yudiz.com/codepen/studio-r/bg-video.mp4" type="video/mp4" />
                {/* src={require("assets/img/enae.webp")} */}
              </video>
            </div>
          </div>
          <div className="scrollBtn" ref={scrollBtnRef}>
            <h6>scroll</h6>
            <span></span>
          </div>
        </div>

        <div id="section2" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2 style={{ color: 'white', fontSize: 'calc(18px + 1.8vw)' }}>대학교의 <strong style={{ color: "#00A86C", fontWeight: '800' }}>니즈</strong>에 맞는<br /><strong style={{ color: "#00A86C", fontWeight: '800' }}>맞춤형</strong> 프로그램 기획</h2>
<img
  alt="..."
  src={require("assets/img/logo-localtripguide.png")}
  style={{
    width: 'calc(120px + 22vw)', 
    height: 'auto',              
    display: 'block'       
  }}
/>
            </div>
            <div className="image"></div>
          </div>
        </div>

        <div id="section3" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2 style={{ color: 'white', fontSize: 'calc(18px + 1.8vw)' }}><strong style={{ color: "#00A86C", fontWeight: '800' }}>전문 운영팀</strong> 배치를 통한<br /><strong style={{ color: "#00A86C", fontWeight: '800' }}>안정</strong>된 프로그램 운영</h2>
<img
  alt="..."
  src={require("assets/img/logo-localtripguide.png")}
  style={{
    width: 'calc(120px + 22vw)', 
    height: 'auto',              
    display: 'block'       
  }}
/>
            </div>
            <div className="image"></div>
          </div>
        </div>

        <div id="section4" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2 style={{ color: 'white', fontSize: 'calc(18px + 1.8vw)' }}><strong style={{ color: "#00A86C", fontWeight: '800' }}>2~3일</strong>내로 받아볼 수 있는<br />운영 <strong style={{ color: "#00A86C", fontWeight: '800' }}>결과 보고서</strong> 제공</h2>
<img
  alt="..."
  src={require("assets/img/logo-localtripguide.png")}
  style={{
    width: 'calc(120px + 22vw)', 
    height: 'auto',              
    display: 'block'       
  }}
/>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
