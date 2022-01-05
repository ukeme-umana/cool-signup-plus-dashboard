import React from "react";
import { Link } from "react-router-dom";

function RightPartSignUp() {
  return (
    <div className="right-space">
      <div className="align-center-vertical right-part-paddinng-top">
        <form className="signup-form">
          <p className="bold-text">Create your Stripe account</p>
          <label for="" className="label-text">
            Email
          </label>
          <input type="email" className="signup-input-styling" />
          <br />
          <label for="" className="label-text">
            Full name
          </label>
          <input type="text" className="signup-input-styling" />
          <br />
          <label for="" className="label-text">
            Password
          </label>
          <br />
          <input type="password" className="signup-input-styling" />
          <br />
          <label for="" className="label-text">
            Confirm password
          </label>
          <br />
          <input type="password" className="signup-input-styling" />
          <br />
          <br />
          <div className="signup-info-txt-div">
            <input type="checkbox" className="checkbox-signup" />
            <p className="grey-info-txt">
              Get emails from Stripe about product updates, industry news, and
              events. If you change your mind, you can unsubscribe at any time.
              <a href="" className="blue-text">
                Privacy Policy
              </a>
            </p>
          </div>
          <input
            type="submit"
            className="signup-blue-continue-btn"
            value="Create account"
          />
        </form>
        <div className="right-space">
          <p className="label-text">
            Have an account?
            <a href="" className="blue-text">
              Sign in
            </a>
          </p>
          <p className="small-blue-text">
            <Link to="/dashboard" className="link-text">
              DASHBOARD LINK
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightPartSignUp;
