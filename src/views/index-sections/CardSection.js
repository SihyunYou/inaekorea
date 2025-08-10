import React from "react";
import { Row, Col } from "reactstrap";

export default function CardSection({ cards }) {
  return (
    <Row>
      {cards.map((card) => (
        <Col key={card.id} xs="12" sm="6" md="4">
          <div className="p-2 text-center">
            <img
              src={card.image}
              style={{
                width: "70%",
                height: "70%",
              }}
              alt={card.title}
            />
            <p>
              <strong>{card.title}</strong>
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
}
