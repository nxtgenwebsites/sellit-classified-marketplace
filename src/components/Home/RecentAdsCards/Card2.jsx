import React from "react";
import Col from "react-bootstrap/Col";

function Card2({ advertise }) {
  return (
    <Col lg={3} md={6}>
      <div className="tab-card p-2 rounded-3 shadow h-100">
        <div className="tab-img h-100">
          <img
            src={advertise.img}
            alt="IMG"
            className="rounded-3 h-100"
            // height="420px"
          />
        </div>
      </div>
    </Col>
  );
}

export default Card2;
