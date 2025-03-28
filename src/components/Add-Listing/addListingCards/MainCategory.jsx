import React from "react";

export default function MainCategory() {
  return (
    <div className="position-relative w-100">
      <div className="heading-form">
        <h3 className="fw-bold mb-5">General Details</h3>
      </div>
      <div className="form-first-group w-100">
        <div className="first-form_group w-100 my-3">
          <div className="label mb-1">
            <label htmlFor="Ad Title">Ad Title</label>
          </div>
          <div className="w-100 form-floating">
            <input
              type="text"
              name="Ad Title"
              className="form-control w-100 h-auto rounded-2 year-input"
              id="floatingInput"
              placeholder="Enter Ad Title"
              required
            />
            <label htmlFor="floatingInput">Ad Title</label>
            <small className="title-input">
              Mention the key features of your item (e.g. brand, model, age,
              type)
            </small>
          </div>
        </div>
        <div className="second-form_group w-100 my-3">
          <div className="label mb-1">
            <label htmlFor="Description">Description</label>
          </div>
          <div className="w-100 form-floating">
            <textarea
              name="Description"
              className="form-control"
              placeholder="Description"
              id="floatingTextarea"
              required
            ></textarea>
            <label htmlFor="Description">Description</label>
            <small>Include condition, features and reason for selling</small>
          </div>
        </div>
      </div>
    </div>
  );
}
