import React from "react";
import "../CSS/index.css";
import LeftPartSignUp from "../Components/signUp/leftPart";
import RightPartSignUp from "../Components/signUp/rightPart";

const CoolSignUpPage = props => {
  return (
    <div className="sign-up-grid-wrapper">
      <LeftPartSignUp />
      <RightPartSignUp />
    </div>
  );
};

export default CoolSignUpPage;
