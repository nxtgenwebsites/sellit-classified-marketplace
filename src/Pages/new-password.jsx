"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Signin.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const NewPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = location.state || {};

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

//   useEffect(() => {
// //     if (!token) {
// //       navigate("/forgot-password");
// //       return;
// //     }
// //   }, [token, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Check all fields filled
    if (!password || !confirmPassword) {
      return setErrorMsg("Please fill in all fields.");
    }

    // Password length check
    if (password.length < 6) {
      return setErrorMsg("Password must be at least 6 characters long.");
    }

    // Password match check
    if (password !== confirmPassword) {
      return setErrorMsg("Passwords do not match.");
    }

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "https://sellit-classified-marketplace-backe.vercel.app/api/auth/reset-password",
        {
          identifier: localStorage.getItem("identifier"),
          newPassword: password,
        }
      );

      if (res.data.message) {
        setSuccessMsg("Password reset successfully!");
          navigate("/login");
      }
    } catch (error) {
      console.log(error);
      const msg =
        error.response?.data?.message ||
        "Failed to reset password. Please try again.";
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
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
            <h2 className="text-center mb-2">Create New Password</h2>
            <p className="text-center text-muted small mb-4">
              Enter your new password below. Make sure it's strong and secure.
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter your new password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {/* <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                    style={{ border: "none", background: "none", zIndex: 10 }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button> */}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm New Password
                </label>
                <div className="position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  {/* <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                    style={{ border: "none", background: "none", zIndex: 10 }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button> */}
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <small className="text-danger">
                      Passwords do not match
                    </small>
                  )}
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
                    Updating Password...
                  </>
                ) : (
                  <>
                    Update Password <FaArrowRight className="ms-2" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
                Back to Forgot Password
              </Link>
            </div>

            <div className="text-center mt-3">
              <p className="register-text">
                Remember your password? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
