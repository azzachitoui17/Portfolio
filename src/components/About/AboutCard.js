import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Azza Chtioui Garbaa </span>
            from <span className="purple"> Monastir, Tunisia.</span>
            <br />
            I am currently pursuing my second year in engineering with a
            specialization in Computer Science at Polytechnic Private University
            of Sousse, an institution recognized for excellence with labels
            including CTI and EUR-ACE
            <br />
            Throughout my academic journey, I have gained a strong theoretical
            foundation and practical skills in software technologies that have
            equipped me to tackle challenges in the field of software
            engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> IEEE Chair cs eps student branch 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
