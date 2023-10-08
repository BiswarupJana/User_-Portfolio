import React, { useState, useEffect } from "react";
import { Popup } from "reactjs-popup";
import EditReviewForm from "./EditReviewForm";
import classes from "./ReviewForm.module.css";

const ReviewForm = ({ formData, setFormData, isFilled }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  // const [counter, setcounter] = useState(1)


  const handleEditClick = (props) => {
    // console.log(props);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    // setcounter(counter + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isFilled(true);

  };
  // console.log(isFilled);

  return (
    <div>
      <div>
        {/* Create a pop-up for editing */}
        <Popup open={isEditOpen} onClose={handleEditClose}>
          <EditReviewForm
            formData={formData}
            setFormData={setFormData}
            onClose={handleEditClose}
          />
        </Popup>
      </div>
      {!isEditOpen && (
        <div className={classes.total}>
          <h1 className={classes.head}>Review Your Information</h1>
          <div className={classes.edit_btn}>
            <button onClick={handleEditClick}>Edit</button>
          </div>
          <div className={classes.body}>
            <p>
              <b>Name:</b> {formData.name}
            </p>
            <p>
              <b>Date of Birth:</b> {formData.dob}
            </p>
            <p>
              <b>Email:</b> {formData.email}
            </p>
            <p>
              {" "}
              <b>Phone No:</b> {formData.ph_number}
            </p>
            <p>
              <b>Address Line 1:</b> {formData.addressLine1}
            </p>
            <p>
              <b>Address Line 2:</b> {formData.addressLine2}
            </p>
            <p>
              <b>City: </b>
              {formData.city}
            </p>
            <p>
              <b>State: </b>
              {formData.state}
            </p>
            <p>
              <b>Country: </b>
              {formData.country}
            </p>
            <p>
              <b>Skills</b>: {formData.skills}
            </p>
            <p>
              <b>Highest Education: </b>
              {formData.highestEducation}
            </p>
            {/* Add additional educational details */}
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <b>Current_Location:</b> {formData.currentLocation}
            </p>
          </div>
          <div className={classes.submit}>
          <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
