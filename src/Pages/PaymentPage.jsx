"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaymentForm = () => {
  const [validated, setValidated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("jazzcash");
  const [showModal, setShowModal] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [adData, setAdData] = useState(null);
  const [loadingAd, setLoadingAd] = useState(true);
  const { tableName, adId } = useParams();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowModal(true);
    }

    setValidated(true);
  };

  const handleScreenshotUpload = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleFinalSubmit = () => {
    if (screenshot) {
      setShowModal(false);
      setSubmitted(true);
    } else {
      alert("Please upload payment screenshot");
    }
  };

  useEffect(() => {
    // Load paymentData from localStorage
    const data = JSON.parse(localStorage.getItem("featured_ad_payment"));
    if (data) {
      setPaymentData(data);
      localStorage.removeItem("featured_ad_payment");
    }
  }, []);

  useEffect(() => {
    if (!tableName || !adId) return;

    const fetchAd = async () => {
      try {
        const response = await axios.get(
          `https://sellit-backend-u8bz.onrender.com/api/manage-ads/get-ad/${tableName}/${adId}`
        );

        // Check if response has data object
        if (response.data) {
          setAdData(response.data.ad); // Update state
          console.log("Fetched ad:", response.data.ad);
        } else {
          console.warn("Ad data is empty");
        }
      } catch (error) {
        console.error("Error fetching ad:", error);
      } finally {
        setLoadingAd(false);
      }
    };

    fetchAd();
  }, [tableName, adId]);

  if (submitted) {
    return (
      <Container className="my-5 p-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center p-5 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-4">
                  <MdOutlineWorkspacePremium size={80} color="#28a745" />
                </div>
                <h2 className="mb-3">Payment Submitted Successfully!</h2>
                <p className="text-muted mb-4">
                  Your ad is now <strong>pending</strong> approval. Once the
                  admin verifies your payment, your ad will be{" "}
                  <strong>featured</strong>.
                </p>
                <p className="text-muted">
                  You will receive a confirmation email once your payment is
                  verified.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container className="my-2">
        <Row className="justify-content-between">
          <Col md={7}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* Contact Details */}
              <h3 style={{ color: "#3a4fc4" }}>Contact Details</h3>
              <Row className="mb-3 row-gap-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Address */}
              <h3 style={{ color: "#3a4fc4" }}>Address</h3>
              <Row className="mb-4 row-gap-3">
                <Col md={6}>
                  <Form.Select required>
                    <option value="">Select Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
                <Col md={6}>
                  <Form.Select required>
                    <option value="">Select State</option>
                    <option value="punjab">Punjab</option>
                    <option value="sindh">Sindh</option>
                    <option value="kpk">KPK</option>
                    <option value="balochistan">Balochistan</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
                <Col md={12}>
                  <Form.Select required>
                    <option value="">Select City</option>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="rawalpindi">Rawalpindi</option>
                    <option value="faisalabad">Faisalabad</option>
                    <option value="multan">Multan</option>
                    <option value="peshawar">Peshawar</option>
                    <option value="quetta">Quetta</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Payment Method */}
              <h3 style={{ color: "#3a4fc4" }}>Payment Method</h3>
              <p className="text-muted mb-4">Select your payment method</p>

              <Card className="bg-light p-4 mb-4">
                <Form.Group className="mb-3 d-flex gap-4">
                  <Form.Check
                    type="radio"
                    id="jazzcash"
                    name="paymentMethod"
                    label="JazzCash"
                    value="jazzcash"
                    checked={paymentMethod === "jazzcash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    id="easypaisa"
                    name="paymentMethod"
                    label="EasyPaisa"
                    value="easypaisa"
                    checked={paymentMethod === "easypaisa"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    id="banktransfer"
                    name="paymentMethod"
                    label="Bank Transfer"
                    value="banktransfer"
                    checked={paymentMethod === "banktransfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </Form.Group>

                {paymentMethod === "jazzcash" && (
                  <div className="mt-3">
                    <h5 className="mb-3">JazzCash Details</h5>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Number"
                        required
                      />
                    </Form.Group>
                  </div>
                )}

                {paymentMethod === "easypaisa" && (
                  <div className="mt-3">
                    <h5 className="mb-3">EasyPaisa Details</h5>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Number"
                        required
                      />
                    </Form.Group>
                  </div>
                )}

                {paymentMethod === "banktransfer" && (
                  <div className="mt-3">
                    <h5 className="mb-3">Bank Transfer Details</h5>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Bank Name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Title"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Account Number / IBAN"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Branch Code (Optional)"
                      />
                    </Form.Group>
                  </div>
                )}
              </Card>

              <Button variant="primary" type="submit" className="w-100 py-2">
                Submit Payment
              </Button>

              <p className="text-center text-muted mt-3 small">
                By placing this order, you agree to our Terms & Services and
                understand our Privacy Policy
              </p>
            </Form>
          </Col>

          <Col md={5}>
            {/* Selected Ad Card */}
            {loadingAd ? (
              <div className="text-center my-4">
                <Spinner animation="border" />
              </div>
            ) : adData ? (
              <div className="border-0  p-4 bg-transparent">
                <div className="mb-3">
                  <img
                    src={
                      adData?.thumbnail_url ||
                      "/assets/img/default-thumbnail.png"
                    }
                    alt={adData?.ad_title || "Ad Thumbnail"}
                    className="rounded-top w-100"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 style={{ color: "#3a4fc4" }}>
                    {adData?.ad_title || "No Title"}
                  </h4>
                  {adData?.price ? (
                    <p className="fw-bold mb-0">{`Rs ${Number(
                      adData?.price
                    ).toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}`}</p>
                  ) : (
                    <p className="text-muted mb-0">Price not available</p>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-center text-muted">Ad not found</p>
            )}

            {/* Payment Details Card */}
            <Card className="border-0 px-4 py-4 rounded-2">
              <Card.Header className="bg-white border-0 px-0">
                <h3 style={{ color: "#3a4fc4" }}>Payment Details</h3>
              </Card.Header>
              <Card.Body className="px-0">
                {paymentData ? (
                  <>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Package</span>
                      <span>{paymentData.offer?.title || "N/A"}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>Rs {paymentData.offer?.price || "N/A"}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax</span>
                      <span>Rs 0.00</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <h5>Total</h5>
                      <h5>Rs {paymentData.offer?.price || "N/A"}</h5>
                    </div>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Screenshot Modal */}
      <Modal
        show={showModal}
        className="modal-screen"
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Payment Screenshot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-3">
            Please upload a screenshot of your payment confirmation to complete
            the process.
          </p>
          <Form.Group>
            <Form.Label>Payment Screenshot</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleScreenshotUpload}
              required
            />
          </Form.Group>
          {screenshot && (
            <div className="mt-3 text-success">
              ✓ File selected: {screenshot.name}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFinalSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PaymentForm;
