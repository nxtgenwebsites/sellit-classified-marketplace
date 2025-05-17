import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGoogle, FaArrowRight } from "react-icons/fa";
import "./Signin.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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

            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Confirm password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 sign-in-btn"
              >
                Login <FaArrowRight className="ms-2" />
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
              <button className="btn btn-outline-primary facebook-btn">
                <FaFacebookF className="me-2" /> Continue Facebook
              </button>
              <button className="btn btn-outline-danger google-btn">
                <FaGoogle className="me-2" /> Continue Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
