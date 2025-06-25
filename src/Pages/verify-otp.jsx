import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaArrowLeft, FaRedo } from "react-icons/fa";
import "./Signin.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const VerifyOTPPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get identifier from localStorage
  const storedIdentifier = localStorage.getItem("identifier");
  const { type } = location.state || {};
  const identifier = storedIdentifier;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (!identifier) {
      navigate("/login");
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [identifier, navigate]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      return setErrorMsg("Please enter the complete 6-digit OTP.");
    }

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // ✅ Always this API
      const res = await axios.post(
        "https://sellit-classified-marketplace-backe.vercel.app/api/auth/verify-otp",
        {
          identifier,
          otp: otpCode,
        }
      );

      if (res.data.message) {
        setSuccessMsg("Verification successful!");
        localStorage.removeItem("identifier"); // optional
          navigate("/");
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || "Invalid OTP. Please try again.";
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // ✅ Always this API
      const res = await axios.post("https://sellit-classified-marketplace-backe.vercel.app/api/auth/send-otp", {
        identifier,
      });

      if (res.data.success) {
        setSuccessMsg("OTP sent successfully!");
        setTimer(60);
        setCanResend(false);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to resend OTP.";
      setErrorMsg(msg);
    } finally {
      setResendLoading(false);
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
            <h2 className="text-center mb-2">Verify Your Account</h2>
            <p className="text-center text-muted small mb-4">
              Enter the 6-digit code sent to your email/phone to continue.
            </p>

            {identifier && (
              <p className="text-center text-muted small mb-4">
                Code sent to: <strong>{identifier}</strong>
              </p>
            )}

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
                <label className="form-label text-center d-block">
                  Enter 6-Digit Code
                </label>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      className="form-control text-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      disabled={isLoading}
                    />
                  ))}
                </div>
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
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Code <FaArrowRight className="ms-2" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-4">
              {canResend ? (
                <button
                  className="btn btn-link text-decoration-none p-0"
                  onClick={handleResendOTP}
                  disabled={resendLoading}
                >
                  {resendLoading ? (
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
                      <FaRedo className="me-2" />
                      Resend Code
                    </>
                  )}
                </button>
              ) : (
                <p className="text-muted small">
                  Resend code in {timer} seconds
                </p>
              )}
            </div>

            <div className="text-center mt-3">
              <Link to="/login" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
