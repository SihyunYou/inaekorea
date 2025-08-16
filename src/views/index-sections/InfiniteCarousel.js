import React from "react";
import PropTypes from "prop-types";
import "./InfiniteCarousel.css";

const InfiniteCarousel = ({ images, reverse = false }) => {
    const getImageSrc = (name) => {
        const extensions = ["png", "webp", "jpg"];
        for (let ext of extensions) {
            try {
                return require(`assets/img/${name}.${ext}`);
            } catch (err) {
                // 다음 확장자로 넘어감
            }
        }
        return "";
    };

    const imageList = images.map((name) => ({
        src: getImageSrc(name),
        alt: name,
    }));

    if (reverse) {
        imageList.reverse();
    }

    return (
        <div className="infinite-carousel">
<div className={`slider-wrapper ${reverse ? "right" : "left"}`}>
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
    reverse: PropTypes.bool,
};

export default InfiniteCarousel;