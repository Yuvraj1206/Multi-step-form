import React from "react";
import "./comp.css";
const Confirmation = ({ formData }) => {
  return (
    <div className="from_container">
      <h3 style={{ marginBottom: "10px" }}>Confirm Your Details</h3>
      <div className="review-section" style={{ textAlign: "left" }}>
        {/* Personal Information */}
        <h4 style={{ marginTop: "7px", color: "#2f9ccf", fontSize: "20px" }}>
          Personal Information
        </h4>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        {/* Address Information */}
        <h4 style={{ marginTop: "10px", color: "#2f9ccf", fontSize: "20px" }}>
          Address Information
        </h4>
        <p>
          <strong>Address Line 1:</strong> {formData.address1}
        </p>
        <p>
          <strong>Address Line 2:</strong> {formData.address2 || "N/A"}
        </p>{" "}
        {/* Address Line 2 is optional */}
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.state}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData.zipCode}
        </p>
      </div>

      {/* Instructions */}
      <p style={{ marginTop: "17px" }}>
        Please review all the details carefully before submitting the form.
      </p>

      {/* Submit Button will be handled in the parent MultiStepForm component */}
    </div>
  );
};

export default Confirmation;
