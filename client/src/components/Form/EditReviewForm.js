import React, { useState } from "react";
import classes from "./EditReviewForm.module.css";

const EditReviewForm = ({ formData, setFormData, onClose }) => {
  // Create local state to manage the form data
  const [editedFormData, setEditedFormData] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the local state with edited data
    setEditedFormData({
      ...editedFormData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Update the formData in the parent component using setFormData
    setFormData(editedFormData);
    onClose();
  };
  return (
    <div className={classes.total}>
      <h2 style={{ height: "10%" }}>Edit Review</h2>
      <form style={{ width: "100%", height: "80%" }}>
        <div className={classes.body}>
          <div className={classes.inputBody}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={editedFormData.name}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={editedFormData.dob}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={editedFormData.email}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="ph_number">Phone No:</label>
            <input
              type="text"
              name="ph_number"
              value={editedFormData.ph_number}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="addressLine1">Address Line 1:</label>
            <input
              type="text"
              name="addressLine1"
              value={editedFormData.addressLine1}
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputBody}>
            <label htmlFor="addressLine2">Address Line 2:</label>
            <input
              type="text"
              name="addressLine2"
              value={editedFormData.addressLine2}
              onChange={handleChange}
            />
          </div>
          <div className={classes.inputBody}>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={editedFormData.city}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              value={editedFormData.state}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              value={editedFormData.country}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              name="skills"
              value={editedFormData.skills}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="highestEducation">Highest Education:</label>
            <input
              type="text"
              name="highestEducation"
              value={editedFormData.highestEducation}
              onChange={handleChange}
            />
          </div>

          <div className={classes.inputBody}>
            <label htmlFor="currentLocation">Current Location:</label>
            <input
              type="text"
              name="currentLocation"
              value={editedFormData.currentLocation}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className={classes.btn}>
        <button onClick={handleSave}>Save</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EditReviewForm;
