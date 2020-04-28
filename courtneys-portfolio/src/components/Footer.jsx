import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export function Footer() {
  return(
      <footer className="mt-3">
        <Container fluid>
          <Row className="p-3 border-top justify-content-between">
            <Col className="p-0" md={3} sm={12}>
              Courtney Wagner
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
              column 2
            </Col>
          </Row>
          <Row className="p-0 justify-content-center">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-wechat"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </Row>
        </Container>
      </footer>
  );
}

// <div class="footer">
//   <div class="footer-links">
//     <a href="#"><i class="fab fa-github"></i></a>
//     <a href="#"><i class="fab fa-instagram"></i></a>
//     <a href="#"><i class="fab fa-facebook"></i></a>
//     <a href="#"><i class="fab fa-twitter"></i></a>
//     <a href="#"><i class="fab fa-linkedin"></i></a>
//   </div>
//   <div class="footer-copyright">
//     This footer is made with <i class="fas fa-heart"></i> at Le Wagon
//   </div>
// </div>
