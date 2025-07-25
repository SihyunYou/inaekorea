import React from "react";
import PropTypes from "prop-types";

const HorizontalTimeline = ({ steps }) => {
    return (
        <div style={{ padding: "40px 20px", overflowX: "auto" }}>
            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    minWidth: "800px",
                    justifyContent: "center",
                    position: "relative"
                }}
            >
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#00A86C",
                            color: "#fff",
                            padding: "20px",
                            borderRadius: "12px",
                            minWidth: "200px",
                            flexShrink: 0,
                            position: "relative",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                marginBottom: "10px"
                            }}
                        >
                            {step.icon}
                        </div>
                        <h6 style={{ margin: 0 }}>{step.title}</h6>

                        {/* 연결 화살표 */}
                        {index !== steps.length - 1 && (
                            <div
                                style={{
                                    position: "absolute",
                                    right: "-28px",
                                    top: "50%",
                                    fontSize: "18px",
                                    color: "#00A86C",
                                    transform: "translateY(-50%)",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                ▶
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

HorizontalTimeline.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired
        })
    ).isRequired
};

export default HorizontalTimeline;
