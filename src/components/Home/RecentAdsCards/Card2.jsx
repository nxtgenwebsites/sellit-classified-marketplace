import React from "react";
import Col from "react-bootstrap/Col";

function Card2({ advertise }) {
  return (
    <Col lg={3} md={6}>
      <div className="tab-card p-2 rounded-3">
        <div className="tab-img">
          <img
            src={advertise.img}
            alt="IMG"
            className="w-100 rounded-3"
            height="420px"
          />
        </div>
      </div>
    </Col>
  );
}

export default Card2;
