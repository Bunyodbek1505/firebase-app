import React from "react";
import "./footer.css";

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

import logo from "../../assets/images/eco-logo.png";

const Footer = () => {

    const year = new Date().getFullYear

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                            {/* <img src={logo} alt="logo" /> */}
                            <div>
                                <h1 className="text-white">Multimart</h1>
                            </div>
                        </div>
                        <br/>
                        <p className="footer_text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                            magnam velit rem voluptatum quo magni nesciunt!
                        </p>

                    </Col>
                    <Col lg="3">
                        <div className="footer_quick-link">
                            <h4 className="quick_links-title">Top Categorys</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Mobile Phone</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Kompyuter</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Foto video texnologiyasi</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="footer_quick-link">
                            <h4 className="quick_links-title">Usefull Link</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="footer_quick-link">
                            <h4 className="quick_links-title">Contact</h4>
                            <ListGroup className="footer_contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                    <p>Toshkent sh</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-phone-line"></i>
                                </span>
                                    <p>+998901333055</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>joryevbunyodbek1505@gmail.com</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright">Copyright {year} developer by Bunyodbek.
                            All rights reserved.
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
