import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import '../CSS/Home_CSS/buisness-profile.css'
function BuisnessProfile() {
    return (
        <div>
            <section className="start-buisness-section">
                <Container>
                    <Row className='row-gap-3'>
                        <Col lg={6}>
                            <div className="buisness-card text-lg-start text-center">
                                <div className="buisness-img">
                                    <img src="assets/img/Buisness img.png" alt="IMG" className="img-fluid" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="buisness-card text-lg-start text-center">
                                <div className="left-title">
                                    <h1 className="fw-semibold">Create a Business Profile</h1>
                                </div>
                                <Row className='row-gap-3'>
                                    <Col sm={6}>
                                        <div className="buisness-second-card text-lg-start text-center rounded-2 px-3">
                                            <div className="mt-4 buisness-list">
                                                <p>Gain 100x more exposure across Pakistan.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="buisness-second-card text-lg-start text-center rounded-2 px-3">
                                            <div className="mt-4 buisness-list">
                                                <p>Promote your business to a broader audience.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="buisness-second-card text-lg-start text-center rounded-2 px-3">
                                            <div className="mt-4 buisness-list">
                                                <p>Showcase products and services.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="buisness-second-card text-lg-start text-center rounded-2 px-3">
                                            <div className="mt-4 buisness-list">
                                                <p>Offer deals to secure more sales.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="buisness-btns d-flex mt-4 gap-3 flex-column flex-sm-row">
                                    <button type="button" className="px-4 py-3 rounded-3">Sign Up Free <span><BsArrowRight /></span>
                                    </button>
                                    <button type="button" className="rounded-3 tour-btn">Start Tour <span><BsArrowRight /></span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    )
}

export default BuisnessProfile
