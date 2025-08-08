import React, { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndexHeader.css';

function IndexHeader({ isReady }) {
    const pageHeader = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const slideImages = [
        require("assets/img/header1.webp"),
    ];
    const logoImage = require("assets/img/logo-localtripguide.webp");

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

    return (
        <section
            className={`testimonials fade-in ${isReady ? 'show' : ''}`}
            ref={pageHeader}
        >
            {isReady && (
                <>
                    <div className="text-overlay" style={{ margin: '0 4vw', marginTop: '2vh' }}>
                        <h1 className="special">
                            <strong className="green">국제교류처</strong>를 위한,<br />
                            <strong className="green">유학생</strong>을 위한,<br />
                            <img src={logoImage} style={{ width: 'calc(8rem + 20vw)' }} />
                        </h1>
                        <h6 style={{ marginRight: '4vw', whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                            전국 대학교들이 주목하는 단 하나의 문화체험 솔루션
                        </h6>
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
