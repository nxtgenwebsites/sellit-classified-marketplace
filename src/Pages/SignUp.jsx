import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGoogle, FaArrowRight } from "react-icons/fa";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    identifier: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { username, identifier, password, confirmPassword } = formData;

  // Check all fields filled
  if (!username || !identifier || !password || !confirmPassword) {
    return setErrorMsg("Please fill in all fields.");
  }

  // Password match check
  if (password !== confirmPassword) {
    return setErrorMsg("Passwords do not match.");
  }

  // Password length check
  if (password.length < 6) {
    return setErrorMsg("Password must be at least 6 characters long.");
  }

  setIsLoading(true)

  try {
    // Signup API
    const res = await axios.post(
      "https://sellit-backend-u8bz.onrender.com/api/auth/signup",
      {
        username,
        identifier,
        password,
      }
    );

    // If signup is successful
    if (res.data.token) {
      // Save token (if needed)
      localStorage.setItem("token", res.data.token);
    localStorage.setItem("uid", res.data.user.id);

      // Send OTP API
      await axios.post("https://sellit-backend-u8bz.onrender.com/api/auth/send-otp", {
        identifier,
      });

      // Save identifier for verification
      localStorage.setItem("identifier", identifier);

      // Navigate to OTP verification page
      navigate("/verify-otp");
    }
  } catch (error) {
    const msg = error.response?.data?.message || "Signup failed.";
    setErrorMsg(msg);
  } finally {
    setIsLoading(false);
  }
};

const handleGoogle = async (credentialResponse) => {
  const token = credentialResponse?.credential;

  const res = await axios.post(
    "https://sellit-backend-u8bz.onrender.com/api/auth/google",
    {
      token,
    }
  );
  localStorage.setItem("uid", res.data.user.id);
  localStorage.setItem("token", res.data.token);
  location.href = "/";
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
            <h2 className="text-center mb-2">Create Account</h2>
            <p className="text-center text-muted small mb-4">
              Sign up to access the following sites.
            </p>

            {errorMsg && (
              <div className="alert alert-danger text-center py-2">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="identifier" className="form-label">
                  Email or Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                    Creating account...
                  </>
                ) : (
                  <>
                    Sign Up <FaArrowRight className="ms-2" />
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="register-text">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              {/* <FacebookLogin
                appId="739592505203061"
                autoLoad={false}
                fields="name,picture"
                callback={responseFacebook}
                textButton="Continue with Facebook"
              /> */}
              <GoogleLogin
                onSuccess={handleGoogle}
                onError={() => console.log("Google Failed")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
