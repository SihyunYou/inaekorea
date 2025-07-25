import React from "react";
import PropTypes from "prop-types";
import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ images }) => {
    const imageList = images.map((name) => ({
        src: require(`assets/img/${name}.png`),
        alt: name,
    }));

    return (
        <div className="infinite-carousel">
            <div className="slider-wrapper left">
                {imageList.map((img, index) => (
                    <div className={`item item${index + 1}`} key={index}>
                        <img src={img.src} alt={img.alt || `image-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

InfiniteCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfiniteCarousel;
