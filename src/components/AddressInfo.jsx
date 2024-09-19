import React from "react";

const AddressInfo = ({ formData, setFormData, errors }) => {
  return (
    <div className="from_container">
      <h3>Address Information</h3>
      <input
        type="text"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      {errors.address1 && <span>{errors.address1}</span>}

      <input
        type="text"
        placeholder="Address Line 2"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <span>{errors.city}</span>}

      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      {errors.state && <span>{errors.state}</span>}

      <input
        type="text"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
      />
      {errors.zipCode && <span>{errors.zipCode}</span>}
    </div>
  );
};

export default AddressInfo;
