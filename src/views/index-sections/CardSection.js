import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "reactstrap";

export default function CardSection({ cards }) {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length === 0) return;

    // 각 카드의 높이를 구해서 최대 높이 계산
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, [cards]);

  return (
    <Row>
      {cards.map((card, i) => (
        <Col key={card.id} xs="12" sm="6" md="4">
          <div
            ref={(el) => (cardRefs.current[i] = el)}
            className="p-2 text-center"
            style={{
              height: maxHeight || "auto",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={card.image}
              style={{
                width: "60%",
                height: "70%",
                marginBottom: '10px'
              }}
              alt={card.title}
            />
            <p dangerouslySetInnerHTML={{ __html: card.title }} />
          </div>
        </Col>
      ))}
    </Row>
  );
}
