import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const PaymentPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle form submission
      console.log("Form submitted successfully");
    }

    setValidated(true);
  };
  return (
    <Container className="my-2">
      <Row className="justify-content-between">
        <Col md={7}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="mb-4">Contact</h2>
            <Form.Group className="mb-4">
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <h2 className="mb-4">Billing</h2>
            <Form.Group className="mb-3">
              <Form.Select required>
                <option value="">Select Country</option>
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Control type="text" placeholder="First Name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Last Name" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={4}>
                <Form.Group>
                  <Form.Select required>
                    <option value="">City</option>
                    <option value="london">London</option>
                    <option value="manchester">Manchester</option>
                    <option value="birmingham">Birmingham</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Select required>
                    <option value="">Select State</option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Zipcode" required />
                </Form.Group>
              </Col>
            </Row>

            <h2 className="mb-3">Payment Method</h2>
            <p className="text-muted mb-4">Enter your card details below</p>

            <Card className="bg-light p-4 mb-4">
              <Form.Group className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FaCreditCard className="me-2" />
                  <Form.Label className="mb-0">Card Number</Form.Label>
                </div>
                <Form.Control type="text" placeholder="Card Number" required />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Expiration Date (MM/YY)"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Security Code"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Control type="text" placeholder="Name on Card" required />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Check
                  type="checkbox"
                  id="saveInfo"
                  label="Save the information for a faster checkout"
                />
              </Form.Group>
            </Card>

            <Button variant="primary" type="submit" className="w-100 py-2">
              Pay Now
            </Button>

            <p className="text-center text-muted mt-3 small">
              By placing this order, you agree to our Terms & Services and
              understand our Privacy Policy
            </p>
          </Form>
        </Col>

        <Col md={4}>
          <Card className="border-0 mb-4 px-4 py-4 rounded-2">
            <Card.Header className="bg-white border-0">
              <h2>Selected Account Type</h2>
            </Card.Header>
            <Card.Body className="bg-light rounded">
              <div className="d-flex align-items-center">
                <div className="premium-icon me-3">
                  <MdOutlineWorkspacePremium size={35} color="#636363"/>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0">
                    Premium <span className="text-muted">Add</span>
                  </h5>
                </div>
                <div className="text-end">
                  <h5>£10.00</h5>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="border-0 px-4 py-4 rounded-2">
            <Card.Header className="bg-white border-0">
              <h2>Subscription Details</h2>
            </Card.Header>
            <Card.Body className="px-0">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>£10.00</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>-£0.00</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>£10.00</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
