import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndexHeader.css'; // 커스텀 스타일

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonials">
      <Slider {...settings}>
        {/* TESTIMONIAL 1 */}
        <div className="item">
          <div className="shadow-effect">
            <img
              className="pull-right"
              src="https://radiustheme.com/demo/html/redchili/redchili/img/slider/slide1-1.jpg"
              alt="testimonial"
            />
          </div>
        </div>

        {/* TESTIMONIAL 2 */}
        <div className="item">
          <div className="shadow-effect">
            <img
              className="pull-right"
              src="https://radiustheme.com/demo/html/redchili/redchili/img/slider/slide1-2.jpg"
              alt="testimonial"
            />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
