import React from "react";
import SignInFooter from "../signIn/signInFooter";

function LeftPartSignUp() {
  return (
    <div className="background-lightBlue left-diagonal-box-wrapper">
      <div className="center-left-side">
        <div className="sub-center-div">
          <div className="h2-center-div">
            <h3 className="blue-h2">stripe</h3>
          </div>
          <div className="stripe-wrapper">
            <div className="txt-check">
              <span className="blue-circle"></span>
              <p className="black-check-txt">Quick and free sign-up</p>
              <span></span>
              <p className="small-black-check-txt">
                Enter your email address to create an account.
              </p>
            </div>

            <div className="txt-check">
              <span className="blue-circle"></span>
              <p className="black-check-txt">Global payment methods</p>
              <span></span>
              <p className="small-black-check-txt">
                Accept credit cards, Apple Pay, ACH, iDEAL, and more.
              </p>
            </div>

            <div className="txt-check">
              <span className="blue-circle"></span>
              <p className="black-check-txt">Start accepting payments</p>
              <span></span>
              <p className="small-black-check-txt">
                Use Stripe's API or pick a pre-built solution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="light-grey-diagonal-div"></div>
      <div className="transparent-diagonal-div"></div>
      <div className="stripe-blue-diagonal-div"></div>
      <div className="transparent-diagonal-div"></div>
      <div className="light-grey-diagonal-div"></div>
      {/* <div className="align-end">
        <SignInFooter />
      </div> */}
    </div>
  );
}

export default LeftPartSignUp;
