import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './Carousel.css';

export default function CarouselComponent({ items = [], onSlideChange }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef = useRef();

    const handleSlideChange = (index) => {
        const currentItem = items[index];
        if (onSlideChange && currentItem) {
            onSlideChange(currentItem.name);
        }
    };

    const navSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: nav1,
        dots: true,
        arrows: true,              // ← 화살표 버튼 활성화
        focusOnSelect: true,
        afterChange: handleSlideChange,
        centerMode: true,
        centerPadding: '0',
    };

    return (
        <div className="carousel-container">
            <Slider
                {...navSettings}
                className="slider-nav-custom"
                asNavFor={nav1}
                ref={(slider) => {
                    setNav2(slider);
                    sliderRef.current = slider;
                }}
            >
                {items.map((item) => (
                    <div className="carousel-item" key={item.id}>
                        <div className="carousel-name"><p>{item.name}</p></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
