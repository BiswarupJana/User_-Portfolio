import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Popup } from "reactjs-popup";
import { UserDataState } from "../../context/manage_userContext";
import ConfirmSubmit from './../popups/confirmSubmit';
import classes from "./SubmitForm.module.css";

export const SubmitForm = ({ formData }) => {
  const { submitResponse, postUserData, loading } = UserDataState() || {};
  const [isConfirmed, setisConfirmed] = useState(false);



  const handleSubmit = async () => {
    await postUserData(formData)
    setisConfirmed(true)
    // console.log(submitResponse.message)
  };

  const handleClose = () => {
    setisConfirmed(false);
    
    // window.location.reload();
  };
  return(
    <div className={classes.total}>
      {loading ? (
        <TailSpin color="red" radius={"8px"} />
      ) : (
        <div>
          <Popup open={isConfirmed} onClose={handleClose}>
            <ConfirmSubmit onClose={handleClose} submitResponse={submitResponse} />
          </Popup>
          {!isConfirmed && (
            <div>
              <h1 className={classes.body}>Do you want to submit?</h1>
              <button onClick={handleSubmit}>Confirm</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
