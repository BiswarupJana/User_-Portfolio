import React, { useState, useEffect } from "react";
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import ContactDetailsForm from "./components/Form/ContactDetailsForm";
import ReviewForm from "./components/Form/ReviewForm";
import { SubmitForm } from "./components/Form/SubmitForm";
import Navigation from "./components/Navigation";
import classes from "./App.module.css";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [nextButton, setnextButton] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    skills: "",
    highestEducation: "",
    currentLocation: "",
    email: "",
    ph_number: "", // Added email field for ContactDetailsForm
    // Add additional educational details fields
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [dataIsFilled, setDataIsFilled] = useState(false);

  const handleNext = () => {
    // Check if all required fields are filled correctly
    if (dataIsFilled) {
      setIsValid(true);
      setCurrentStep(currentStep + 1);
    } else {
      setIsValid(false);
      // Handle validation error (display an error message, etc.)
    }
  };
  const data = (data) => {
    setDataIsFilled(data);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setDataIsFilled(false);
  }, [currentStep]);

  return (
    <div className={classes.total}>
      <div className={classes.field}>
        {currentStep === 1 && (
          <PersonalInfoForm
            formData={formData}
            isFilled={data}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <ContactDetailsForm
            formData={formData}
            isFilled={data}
            handleChange={handleChange}
          />
        )}
        {currentStep === 3 && (
          <ReviewForm
            formData={formData}
            isFilled={data}
            setFormData={setFormData}
          />
        )}
        {currentStep === 4 && <SubmitForm formData={formData} />}
      </div>

      <div className={classes.nav}>
        <Navigation
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentStep={currentStep}
          info={dataIsFilled}
        />
      </div>
    </div>
  );
}

export default App;
