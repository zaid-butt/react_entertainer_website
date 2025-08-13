import React, { useState } from "react";
import validator from "validator";
import SmLogin from "../LoginSignup/SmLogin.js";

function Loginleft({ emailExist, userSignin, isEmailExist }) {

  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  const validateEmail = (e) => {
    setInputEmail(e.target.value)
    
    if (validator.isEmail(e.target.value)) {
      setEmailMessage("");
      document.getElementById("signinsubmit").classList.remove("disabled");
    } else {
      setEmailMessage("Please enter valid Email!");
      document.getElementById("signinsubmit").classList.add("disabled");
    }
  };

  const validatePass = (e) => {
    setInputPassword(e.target.value)
    if (e.target.value.length > 1) {
      setPassMessage("");
      document.getElementById("signinsubmit").classList.remove("disabled");
    } else {
      setPassMessage("Please enter password");
      document.getElementById("signinsubmit").classList.add("disabled");
    }

  };

  return (
    <>
      <div className="login_content">
        <div id="login_content" className="padtop64">
          <div className="login_logo">
            <a className="btn btn-block" href="index.html">
              <img
                src="https://b2cappassetscdn.theentertainerme.com/website_images/Logo-bot.svg"
                alt=" "
              />
            </a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="center_form">
                <div className="align-self-center">
                  {<SmLogin />}
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <fieldset>
                          <label htmlFor="Emailaddress">Email address </label>
                          <input
                            className="form-control"
                            type="text"
                            value={inputEmail}
                            onChange={(e) => validateEmail(e)}
                            placeholder="example@gmail.com"
                          />
                          <div className="message-invalid">
                            {emailMessage}
                          </div>

                        </fieldset>
                      </div>
                    </div>
                    {inputEmail === true ?
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <fieldset>
                            <label htmlFor="Password">Password </label>
                            <input
                              className="form-control"
                              type="password"
                              maxLength={30}
                              value={inputPassword}
                              onChange={(e) => validatePass(e)}
                              placeholder="password"
                            />
                            <div className="message-invalid">
                              {passMessage}
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      : ''}
                    <button
                      id="signinsubmit"
                      className="btn btn-primary btn-block disabled"
                      type="submit"
                    >
                      Continue
                    </button>
                    <div className="form-group submitting_text">
                      By continuing you agree to our
                      <u>
                        <a href="#0">End User License Agreement</a>
                      </u>
                      & Privacy Policy
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginleft;
