import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import diseaseDetection from "../../Assets/Projects/disease_detection.png";
import smartirrigation from "../../Assets/Projects/smart.png";
import employement from "../../Assets/Projects/employement.png";
import todo from "../../Assets/Projects/todo_.png";
import productManagement from "../../Assets/Projects/product_.jpg";
import connect4 from "../../Assets/Projects/connect4.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diseaseDetection}
              isBlog={false}
              title="Detection of Diseases"
              description="Designing and developing a mobile application based on artificial intelligence to detect plant anomalies, using Flutter and Python for machine learning. ."
              // ghLink="https://github.com/soumyajit4419/Chatify"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartirrigation}

              isBlog={false}
              title="SmartIrrigation"
              description="Designing and developing a smart irrigation mobile application integrating an artificial intelligence module for detecting plant anomalies, along with an IoT component for predicting temperature and humidity to maintain plant health. Using Python (machine learning), Flutter, and Express.js.."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employement}
              isBlog={false}
              title="Management of Employers"
              description="Designing and developing a website for employer management using Spring Boot, React.js, Vite, and PostgreSQL."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Task Management"
              description="Designing and developing a website for task management using Spring Boot, React.js, Vite, and PostgreSQL.."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={productManagement}
              isBlog={false}
              title="Product Management"
              description="Designing and developing a website for product management using React.js and Express.js."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect4}
              isBlog={false}
              title="Connect-4"
              description="Design and development of a website for a game using React.js.."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Designing and developing a website for online sales and purchases management using React.js, Spring Boot, and PostgreSQL.."
              // ghLink=""
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
