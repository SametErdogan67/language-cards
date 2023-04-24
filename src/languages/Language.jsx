import React from "react";
import { languages } from "../helper/data";
import Card from "../component/card/Card";
import { Col } from "react-bootstrap";
import "../languages/Languages.css";

const Language = () => {
  return (
    <div className="text-center body">
      <div className="languages ">
        <h2>Languages</h2>
      </div>
      {languages.map((item) => {
        return (
          <Col className="cards">
            <Card {...item} />
          </Col>
        );
      })}
    </div>
  );
};

export default Language;
