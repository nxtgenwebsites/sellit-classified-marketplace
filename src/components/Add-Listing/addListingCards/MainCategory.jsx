import React from "react";

export default function MainCategory() {
  return (
    <div className="position-relative w-100">
      <div className="heading-form">
        <h3 className="fw-bold mb-5">General Details</h3>
      </div>
      <form className="form-first-group w-100">
        <div className="first-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Ad Title">Ad Title</label>
          </div>
          <div className="input title-input w-100">
            <input
              type="text"
              name="Ad Title"
              id="Ad Title"
              className="w-100 px-3 py-2 rounded-2 year-input"
              required
            />
            <small>
              Mention the key features of your item (e.g. brand, model, age,
              type)
            </small>
          </div>
        </div>
        <div className="second-form_group d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Description">Description</label>
          </div>
          <div className="input description-input w-100">
            <textarea
              name="Description"
              id="Description"
              className="w-100 px-3 py-2 rounded-2 year-input"
              required
            ></textarea>
            <small>Include condition, features and reason for selling</small>
          </div>
        </div>
      </form>
    </div>
  );
}
