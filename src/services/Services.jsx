import React from "react";
import "./services.css";

import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import serviseData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>

          {serviseData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div whileHover ={{scale: 1.1}} className="service_item" style={{background: `${item.bg}`}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}

          {/* <Col lg="3" md="4">
            <div className="services_item">
              <span>
                <i class="ri-truck-line"></i>
              </span>
              <div>
                <h3>Free Shipping</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
