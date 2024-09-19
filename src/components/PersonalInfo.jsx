import React from "react";
import "./comp.css";

const PersonalInfo = ({ formData, setFormData, errors }) => {
  return (
    <div className="from_container">
      <h3>Personal Information</h3>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <span>{errors.name}</span>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        type="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {errors.phone && <span>{errors.phone}</span>}
    </div>
  );
};

export default PersonalInfo;
