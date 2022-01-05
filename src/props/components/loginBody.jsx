import React from "react";

function LoginBody() {
  return (
    <div className="loginBodyWrapper">
      <div className="left-part">
        <div className="lg-tradr-logo">
          <img
            src="http://thrive-aos-web.herokuapp.com/static/media/aos-logo.e9e42c33.png"
            alt=""
            className="lg-tradr-img"
          />
        </div>
      </div>
      <div className="right-part">
        <h2 className="lg-txt">Login to Thrive AOS</h2>
        <span className="enter-txt">Enter your details below</span>
        <form className="tradr-login-form">
          <label for="" className="tradr-label-text">
            Thrive ID
          </label>
          <input type="number" className="tradr-input-styling" />
          <br />
          <br />
          <label for="" className="tradr-label-text">
            Password
          </label>
          <br />
          <input type="password" className="tradr-input-styling" />
          <input
            type="submit"
            className="tradr-green-login-btn"
            value="Login"
          />
        </form>
        <div className="copyrt-tradr">
          <p className="tradr-gry-label-text">
            &#169; Copyright Thrive Agric 2020. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginBody;
