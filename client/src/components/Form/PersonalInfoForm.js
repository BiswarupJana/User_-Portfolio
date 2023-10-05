import React from "react";
import classes from "./PersonalInfoForm.module.css";

const PersonalInfoForm = ({ formData, isFilled, handleChange }) => {
  const areAllFieldsFilled = () => {
    // Replace these with the actual required fields
    const requiredFields = [
      "name",
      "dob",
      "addressLine1",
      "city",
      "state",
      "skills",
      "highestEducation",
    ];
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
      <form action="" onSubmit={handleSubmit}>
        <div>
          <h1>Personal Information</h1>
        </div>
        <div className={classes.body}>
          <div className={classes.inputBody}>
            <label>Name* </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Date of Birth* </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Address Line 1* </label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Address Line 1"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Address Line 2 </label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Address Line 2"
            />
          </div>
          <div className={classes.inputBody}>
            <label>City* </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>State* </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Country* </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Skills* </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Highest Education* </label>
            <input
              type="text"
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              placeholder="Highest Education"
              required
            />
          </div>
          <div className={classes.inputBody}>
            <label>Current Location </label>
            <input
              type="text"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              placeholder="Current Location"
            />
          </div>
        </div>
        <div className={classes.submit}>
          <button type="submit">Submit</button>
        </div>
        {/* <input type='submit' value='Submit' /> */}
      </form>
      {/* <Navigation onNext={isValid ? handleNext : null} onPrevious={handlePrevious} progress={33} /> */}
    </div>
  );
};

export default PersonalInfoForm;
