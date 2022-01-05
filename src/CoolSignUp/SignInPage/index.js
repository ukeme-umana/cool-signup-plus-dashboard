import React from "react";
import "../CSS/index.css";
import SignInBody from "../Components/signIn/signInBody";
import SignInBackground from "../Components/signIn/signInBackground";
import SignInFooter from "../Components/signIn/signInFooter";

const CoolSignInPage = props => {
  return (
    <div className="exact-height">
      <SignInBackground />
      <SignInBody />
      <div className="relative">
        <SignInFooter />
      </div>
    </div>
  );
};

export default CoolSignInPage;
