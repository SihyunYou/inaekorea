import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "reactstrap";

export default function CardSection({ cards }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false); // 애니메이션 한번만

  useEffect(() => {
    if (cardRefs.current.length === 0) return;

    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, [cards]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // 애니메이션 순차 트리거
          cards.forEach((_, i) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, i]);
            }, i * 200);
          });
        }
      },
      {
        threshold: 0.3, // 30% 이상 보여질 때 반응
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [cards, hasAnimated]);

  return (
    <div ref={containerRef}>
      <Row>
        {cards.map((card, i) => (
          <Col key={card.id} xs="12" sm="6" md="4">
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className="p-2 text-center"
              style={{
                height: maxHeight || "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: visibleIndexes.includes(i) ? 1 : 0,
                transform: visibleIndexes.includes(i)
                  ? "translateY(0)"
                  : "translateY(-30px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <img
                src={card.image}
                style={{
                  width: "70%",
                  height: "70%",
                  marginBottom: "10px",
                }}
                alt={card.title}
              />
              <p dangerouslySetInnerHTML={{ __html: card.title }} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
