"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    location.href = "/new-password";
    // const { identifier } = formData;

    // // Check if field is filled
    // if (!identifier) {
    //   return setErrorMsg("Please enter your email or phone number.");
    // }

    // setIsLoading(true);
    // setErrorMsg("");
    // setSuccessMsg("");

    // try {
    //   const res = await axios.post(
    //     "http://localhost:3000/api/auth/forgot-password",
    //     {
    //       identifier,
    //     }
    //   );

    //   if (res.data.success) {
    //     setSuccessMsg("Reset instructions sent to your email/phone!");
    //     setTimeout(() => {
    //       navigate("/verify-otp", { state: { identifier, type: "reset" } });
    //     }, 2000);
    //   }
    // } catch (error) {
    //   const msg =
    //     error.response?.data?.message || "Failed to send reset instructions.";
    //   setErrorMsg(msg);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="container-fluid py-5 sign-in-container">
      <div className="row py-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="illustration-container">
            <img
              src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298cf3bb93c3f_6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png"
              alt="Person working on laptop"
              className="img-fluid illustration"
            />
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="form-container">
            <h2 className="text-center mb-2">Forgot Password?</h2>
            <p className="text-center text-muted small mb-4">
              Enter your email or phone number and we'll send you instructions
              to reset your password.
            </p>

            {errorMsg && (
              <div className="alert alert-danger text-center py-2">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <div className="alert alert-success text-center py-2">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="identifier" className="form-label">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identifier"
                  placeholder="Enter your email or phone number"
                  value={formData.identifier}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 sign-in-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send OTP <FaArrowRight className="ms-2" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-4">
              <Link to="/login" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
                Back to Login
              </Link>
            </div>

            <div className="text-center mt-3">
              <p className="register-text">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
