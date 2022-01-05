import React from "react";
import { Link } from "react-router-dom";

function SignInBody() {
  return (
    <div className="center-wrapper">
      <div className="align-center-vertical">
        <div className="h2-center-div">
          <h2 className="blue-h2">stripe</h2>
        </div>
        <main className="sign-in-wrapper">
          <form className="">
            <p className="bold-text">Sign in to your account</p>
            <label for="" className="label-text">
              Email
            </label>
            <br />
            <input type="email" className="input-styling" />
            <div className="forgot-pw-div">
              <p className="small-blue-text forgot-pw-side">
                <a href="" className="link-text">
                  Forgot your password?
                </a>
              </p>
            </div>
            <label for="" className="label-text">
              Password
            </label>
            <br />
            <input type="password" className="input-styling" />
            <br />
            <div className="stay-txt-div">
              <input type="checkbox" />
              <p className="stay-signed-txt">Stay signed in for a week</p>
            </div>
            <input
              type="submit"
              className="blue-continue-btn"
              value="Continue"
            />
            <div className="sso-div">
              <p className="small-blue-text">
                <a href="" className="link-text">
                  Use single sign-on (SSO) instead
                </a>
              </p>
            </div>
          </form>
        </main>
        <div className="arrange-sign">
          <p className="small-blue-text">
            <Link to="/cool-signup" className="link-text">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInBody;
