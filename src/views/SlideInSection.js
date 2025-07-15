import React from "react";
import { motion } from "framer-motion";

function SlideInSection({ 
  imageSrc, 
  altText = "", 
  children, 
  width = "100%"
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.img
        src={imageSrc}
        alt={altText}
        className="mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 80 }}
        style={{ 
          transformStyle: "preserve-3d",
          width: width,
        }}
      />
    </div>
  );
}

export default SlideInSection;
