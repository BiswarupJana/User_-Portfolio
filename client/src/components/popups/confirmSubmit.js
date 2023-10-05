// import React from "react";

// const ConfirmSubmit = ({ submitResponse }) => {
//   console.log(submitResponse);
//   return <div><h1>{submitResponse.message} </h1></div>;
// };
// export default ConfirmSubmit;



import React from "react";
import classes from "./confirmSubmit.module.css";

const ConfirmSubmit = ({ submitResponse, onClose }) => {
  console.log(submitResponse);
  return (
    <div className={classes["confirm-submit"]}>
      <h1 className={classes["confirm-message"]}>{submitResponse.message}</h1>
      <button onClick={onClose} className={classes["confirm-button"]}>OK</button>
    </div>
  );
};

export default ConfirmSubmit;