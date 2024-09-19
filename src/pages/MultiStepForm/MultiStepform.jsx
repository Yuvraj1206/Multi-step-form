import React, { useState, useEffect } from "react";
import "./MultiStepForm.css";
import PersonalInfo from "../../components/PersonalInfo";
import AddressInfo from "../../components/AddressInfo";
import Confirmation from "../../components/Confirmation";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  // Save form data to localStorage on change
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Retrieve form data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Validation function
  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Valid email is required";
      }
      if (!formData.phone) newErrors.phone = "Phone is required";
    } else if (step === 2) {
      if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Submitting form data", formData);
      alert("Form is submitted");
      // Handle form submission
    }
  };

  return (
    <div className="multi_setup">
      <h2>MULTI-SETUP FORM</h2>
      {step === 1 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      )}
      {step === 2 && (
        <AddressInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      )}
      {step === 3 && <Confirmation formData={formData} />}

      <div className="btns">
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 3 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
