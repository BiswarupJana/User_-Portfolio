import React from "react";
import classes from "./ContactDetailsForm.module.css";

const ContactDetailsForm = ({ formData, isFilled, handleChange }) => {
  const areAllFieldsFilled = () => {
    // Replace these with the actual required fields
    const requiredFields = ["email", "ph_number"];
    return requiredFields.every((field) => formData[field] !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (areAllFieldsFilled()) {
      isFilled(true);
    } else {
      isFilled(false);
    }
  };
  return (
    <div className={classes.total}>
      <div className={classes.head}>
          <h2>Contact Details</h2>
        </div>
      <form action="" onSubmit={handleSubmit} style={{ height: "90%",width:'95%' }}>
        
        <div className={classes.body}>
          <div className={classes.inputBody}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label htmlFor="">Phone No:</label>
            <input
              type="number"
              name="ph_number"
              value={formData.ph_number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className={classes.submit}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
