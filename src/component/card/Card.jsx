import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../card/Card.css";

const Card = (item) => {
  const { name, img, options } = item;
  const [showImage, setShowImage] = useState(true);
  const setClick = () => {
    setShowImage(!showImage);
  };

  return (
    <Container
      className="rounded-4 mt-4 p-4 container"
      style={{ background: "#f48b29" }}
      onClick={setClick}
    >
      {showImage ? (
        <Row className="g-3 justify-content-center">
          <Col sm={6} md={4} lg={3}>
            <Image src={img} alt="image" className="image" />
            <h3 className="desc">{name}</h3>
          </Col>
        </Row>
      ) : (
        <ul className="ul">
          <li className="li">{options}</li>
        </ul>
      )}
    </Container>
  );
};

export default Card;
