import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaGoogle, FaArrowRight } from "react-icons/fa";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

const handleGoogle = async (credentialResponse) => {
  const token = credentialResponse?.credential;

  const res = await axios.post("https://sellit-classified-marketplace-backe.vercel.app/api/auth/google", {
    token,
  });
  localStorage.setItem("uid", res.data.user._id);
  localStorage.setItem("token", res.data.token);
  location.href = "/";
};

  // const handleFacebook = async (res) => {
  //   const token = res.accessToken;
  //   const { data } = await axios.post(
  //     "https://sellit-classified-marketplace-backe.vercel.app/api/auth/facebook",
  //     { token }
  //   );
  //   console.log(data);
  // };

  // const responseFacebook = async (response) => {
  //   try {
  //     const res = await axios.post(
  //       "https://sellit-classified-marketplace-backe.vercel.app/api/auth/facebook-login",
  //       {
  //         accessToken: response.accessToken,
  //         userID: response.userID,
  //       }
  //     );

  //     const { token, user } = res.data;
  //     console.log("JWT Token:", token);
  //     console.log("User:", user);

  //     // Optionally save token to localStorage
  //     localStorage.setItem("token", token);
  //   } catch (error) {
  //     console.error(
  //       "Facebook login error:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://sellit-classified-marketplace-backe.vercel.app/api/auth/signin", {
        identifier,
        password,
      });

      if (res.data.token) {
        // Optionally save token
        localStorage.setItem("uid", res.data.user._id);
        localStorage.setItem("token", res.data.token);
      location.href = '/';
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || "Something went wrong. Try again.";
      setErrorMsg(msg);
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
            <h2 className="text-center mb-2">Login</h2>
            <p className="text-center text-muted small mb-4">
              Sign in to access your account.
            </p>

            {errorMsg && (
              <div className="alert alert-danger text-center py-2">
                {errorMsg}
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="identifier" className="form-label">
                  Email or Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identifier"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 sign-in-btn"
                // onClick={handleLogin}
              >
                Login <FaArrowRight className="ms-2" />
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="register-text">
                Not a member? <Link to="/signup">Sign Up</Link>
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

export default SignInPage;
