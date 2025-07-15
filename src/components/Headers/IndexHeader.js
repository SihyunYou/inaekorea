/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndexHeader.css';

function IndexHeader() {
    const pageHeader = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        beforeChange: () => {
            // animation 초기화
        },
        afterChange: (current) => {
            setActiveIndex(current);
        }
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

    const slides = [
        require("assets/img/header1.jpg"),
        require("assets/img/header2.png"),
        require("assets/img/header3.jpg"),
        require("assets/img/header4.jpg"),
    ];

    const slideTexts = [
        "부여, 백제문화단지",
        "아산, 외암민속마을",
        "공주, 공산성",
        "전주, 한옥마을",
    ];

    return (
        <section className="testimonials" ref={pageHeader}>
            <div className="text-overlay">
                <h3>
                    대학교 <strong className="green">국제교류처</strong>를 위한<br />
                    외국인 유학생 <strong className="green">문화체험</strong> 통합 솔루션
                </h3>
                <img
                    alt="로고"
                    src={require("assets/img/logo-localtripguide.png")}
                    className="logo-image"
                />
            </div>

            <Slider {...settings}>
                {slides.map((src, idx) => (
                    <div key={idx} className="slide-container">
                        <img
                            className={`slide-image ${idx === activeIndex ? 'active' : ''}`}
                            src={src}
                            alt={`slide-${idx}`}
                        />
                        <div className={`slide-caption ${idx === activeIndex ? 'visible' : 'hidden'}`}>
                            {slideTexts[idx]}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default IndexHeader;
