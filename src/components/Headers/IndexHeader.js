/* eslint-disable */
import React, { useEffect, useRef } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndexHeader.css';

function IndexHeader() {
  const pageHeader = useRef();
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
    "https://radiustheme.com/demo/html/redchili/redchili/img/slider/slide1-1.jpg",
    "https://radiustheme.com/demo/html/redchili/redchili/img/slider/slide1-2.jpg"
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
          <div key={idx}>
            <img className="slide-image" src={src} alt={`testimonial-${idx}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default IndexHeader;
