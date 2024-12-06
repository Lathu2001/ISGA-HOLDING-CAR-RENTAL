import React, { useState } from "react";

export default function AddQuotation() {
  // State for form fields
  const [need, setNeed] = useState("");
  const [address, setAddress] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission, e.g., API call
    console.log({ need, address, timeLimit, description });
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div
        className="card"
        style={{ backgroundColor: "#d9d9d9", borderRadius: "25px" }}
      >
        <div className="card-body">
          <div className="d-flex flex-row">
            <label className="radio mr-1">
              <div className="text-center">
                <button
                  className="btn btn-block confirm-button"
                  style={{
                    borderRadius: "10px",
                    margin: "10px",
                    backgroundColor: "#3DDABE",
                  }}
                >
                  <i
                    className="bi bi-envelope"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  Message
                </button>
                <button
                  className="btn btn-block confirm-button"
                  style={{ borderRadius: "10px", backgroundColor: "#3DDABE" }}
                >
                  Call Now
                </button>
                <hr />
              </div>
            </label>
          </div>

          <h6
            className="information mt-4"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Apply Quotation
          </h6>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Time limit"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-sm-4 d-flex align-items-stretch">
                <button
                  className="btn btn-block d-flex align-items-center justify-content-center"
                  style={{
                    height: "45px",
                    margin: "10px",
                    backgroundColor: "#00A8E8",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="description"
                    rows="4"
                    placeholder="Enter your description"
                    style={{ height: "10%" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
              <small className="agree-text">
                By booking this appointment, you agree to the
              </small>
              <a href="#" className="terms">
                Terms & Conditions
              </a>
            </div>

            <div className="text-center">
              <button
                className="btn btn-block confirm-button"
                style={{ borderRadius: "10px", backgroundColor: "#00A8E8" }}
                type="submit"
              >
                Request Quotation
              </button>
              <div style={{ margin: "10px 0" }}></div>
              <button
                className="btn btn-block confirm-button"
                style={{ borderRadius: "10px", backgroundColor: "#00A8E8" }}
              >
                Hire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
