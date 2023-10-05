import React from "react";
import classes from './Navigation.module.css'

const Navigation = ({ onNext, onPrevious, currentStep, info }) => {
  const progress = (currentStep / 3) * 100;
  // console.log(info);
  return (
    <div className={classes.nav}>
      <div className={classes.nav_btn}>
      {currentStep > 1 && <button onClick={onPrevious}>Previous</button>}

{!(currentStep > 4) && info && <button onClick={onNext}>Next</button>}
      </div>
      <br />
      <progress value={progress} max="100" />
    </div>
  );
};

export default Navigation;
