import React, { useState } from "react";
import "./footer-css/footer-advertise-css.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function AdvertisePage() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  return (
    <div>
      <section className="advertise-section">
        <div className="container">
          <form
            action="mailto:sales@sellit.com.pk"
            className="advertise-form p-3 rounded-2"
          >
            <div className="form-heading">
              <h1 className="fw-semibold mb-3">
                Advertise with Sellit Pakistan
              </h1>
            </div>
            <div className="advertise-group gap-2 w-100 d-md-flex justify-content-center align-items-center">
              <div className="name w-100">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="buisness-name w-100 mt-md-0 mt-3">
                <input type="text" placeholder="Buisness Name" required />
              </div>
            </div>
            <div className="advertise-group gap-2 w-100 d-md-flex justify-content-center align-items-center mt-2">
              <div className="name w-100">
                <input
                  type="email"
                  placeholder="Buisness Email Address"
                  required
                />
              </div>
              <div className="buisness-name w-100 mt-3 mt-md-0">
                <input type="tel" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="advertise-group mt-2">
              <select className="form-select">
                <option value="1">Above the fold (Homepage)</option>
                <option value="2">Below the fold (Homepage)</option>
                <option value="3">Sticky Ad - Category</option>
              </select>
            </div>
            <div className="advertise-group mt-2">
              <textarea
                placeholder="Add more details here..."
                required
              ></textarea>
            </div>
            <div className="advertise-group mt-2 d-flex justify-content-center align-items-center">
              <ReCAPTCHA
                sitekey="6LeAwskqAAAAACR4EhOoo6i4z2SflKyZvEFYQaC0"
                onChange={handleCaptchaChange}
              />
              {captchaValue && <p>Captcha Verified</p>}
            </div>
            <div className="advertise-group mt-2">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
