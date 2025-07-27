import React from "react";

const Spacer = ({ count = 1 }) => {
    // count가 유효하지 않은 값이면 1로 기본 설정
    const validCount = Math.max(0, parseInt(count, 10) || 0);

    return (
        <>
            {Array.from({ length: validCount }, (_, i) => (
                <br key={i} />
            ))}
        </>
    );
};

export default Spacer;
