import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiPycharm,
  SiGooglecolab,
  SiUml
} from "react-icons/si";
import { GrWindows } from "react-icons/gr";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <GrWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGooglecolab />
      </Col>
 
    
     
    </Row>
  );
}

export default Toolstack;
