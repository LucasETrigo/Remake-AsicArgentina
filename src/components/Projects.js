import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import asic1 from "../assets/img/asics/M30S++.png";
import asic2 from "../assets/img/asics/bitmaingod.png";
import asic3 from "../assets/img/asics/A1126.png";
import asic4 from "../assets/img/asics/a10proeth.png";
import asic5 from "../assets/img/asics/e9bitmain.png";

export const Projects = () => {

  const projects = [
    {
      title: "WhatsMiner M30s++",
      price: "u$5300",
      hashrate: "110TH/S (±5%)",
      consumo: "3400W (±5%, 25°C)",
      garantia: "365 DÍAS",
      voltaje: "220V A 240V",
      algoritmo: "SHA-256",
      imgUrl: asic1,
    },
    {
      title: "Bitmain s19j Pro",
      price: "u$5500",
      hashrate: "104TH/S (±3%)",
      consumo: "3068W (±5%, 25°C)",
      garantia: "365 DÍAS",
      voltaje: "200V A 240V",
      algoritmo: "SHA-256",
      imgUrl: asic2,
    },
    {
      title: "Avalon 1126 Pro",
      price: "u$2800",
      hashrate: "68TH/S (±3%)",
      consumo: "3420W (±5%, 25°C)",
      garantia: "365 DÍAS",
      voltaje: "200V A 240V",
      algoritmo: "SHA-256",
      imgUrl: asic3,
    },
  ];


  const projects2 = [
    {
      title: "INNOSILICON A10 Pro ETH",
      price: "u$7500",
      hashrate: "750MH/S (±6%)",
      consumo: "1300W (±10%, 25°C)",
      garantia: "180 DÍAS",
      voltaje: "210V A 240V",
      algoritmo: "ETHASH",
      imgUrl: asic4,
    },
    {
      title: "Bitmain E9",
      price: "u$12500",
      hashrate: "2,4 GH/S (±10%)",
      consumo: "1920W (±10%, 25°C)",
      garantia: "180 DÍAS",
      voltaje: "200V A 240V",
      algoritmo: "ETHASH",
      imgUrl: asic5,
    },
  ];

  const projects3 = [
    {
      title: "Bitmain Litecoin Miner L7",
      price: "u$13000",
      hashrate: "9050MH/S (±3%)",
      consumo: "3260W (±10%, 25°C)",
      garantia: "365 DÍAS",
      voltaje: "200V A 240V",
      algoritmo: "SCRYPT",
      imgUrl: asic2,
    },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Precios & Especificaciones</h2>
                <p>Te vamos a asesorar y guiar en todo el proceso previo y posterior a tu compra.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BTC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ETH</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">LTC/DOGE</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
