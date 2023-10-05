import React, { createContext, useContext, useState } from "react";

const UserData = createContext();
const UserContext = ({ children }) => {
  const [submitResponse, setsubmitResponse] = useState("");

  const postUserData = async (props) => {

    console.log(props);
    try {
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(props),
      });
      const data = await response.json();
      setsubmitResponse(data);


      if (!response.ok) {
        // setsubmitResponse(data);
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserData.Provider
      value={{
        submitResponse,
        
        postUserData,
      }}
    >
      {children}
    </UserData.Provider>
  );
};

export default UserContext;
export const UserDataState = () => {
  return useContext(UserData);
};
