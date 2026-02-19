import React, { useState } from "react";
import Logobot from "assets/images/Logo-bot.svg"
import SmLogin from "../LoginSignup/SmLogin.js";
import PasswordChecklist from "react-password-checklist";
import { useTranslation } from "react-i18next";

function Signup1() {
  const { t } = useTranslation();

  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  return (
    <>
      <div className="login_content">
        <div id="login_content" className="padtop64">
          <div className="login_logo">
            <a className="btn btn-block" href="index.html">
              <img
                src={Logobot}
                alt=" "
              />
            </a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="center_form">
                <div className="align-self-center">
                  {<SmLogin />}
                  <form action="#" autoComplete="off">
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <fieldset>
                          <div className="signup-header">
                            <label htmlFor="Emailaddress">Email address </label>
                            <label>
                              <a href={"/" + t("html_lang") + "/signin"}>
                                Switch account
                              </a>
                            </label>
                          </div>
                          <input
                            name="email"
                            id="Emailaddress"
                            type="text"
                            placeholder="example@gmail.com"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                            readOnly="readOnly"
                          />
                          <span className="text-danger"></span>
                        </fieldset>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="Firstname">First name</label>
                        <input
                          name="first_name"
                          autoComplete="off"
                          id="Firstname"
                          type="text"
                          placeholder="e.g Adam"
                          className="form-control"
                          aria-required="true"
                          aria-invalid="false"
                          required
                        />
                        <span className="text-danger"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="Lastname">Last name</label>
                        <input
                          name="last_name"
                          autoComplete="off"
                          id="Lastname"
                          type="text"
                          placeholder="e.g Lane"
                          className="form-control"
                          aria-required="true"
                          aria-invalid="true"
                          required
                        />
                        <span className="text-danger"></span>
                      </div>
                    </div>
                    <div id="pass_strength" className="form-group">
                      <label htmlFor="Createpassword">Create password</label>
                      <div className="password">
                        <input
                          name="create_password"
                          id="Createpassword"
                          type={passwordShown ? "text" : "password"}
                          autoComplete="off"
                          placeholder="Password"
                          className="form-control"
                          aria-required="true"
                          aria-invalid="false"
                          onChange={e => setPassword(e.target.value)}
                        />
                        <span>
                          <i className="bi bi-eye-slash" onClick={togglePassword}></i>
                        </span>
                      </div>
                      <PasswordChecklist
                        rules={[
                          "minLength",
                          "number",
                          "capital",
                          "lowercase",
                          "specialChar",
                        ]}
                        minLength={8}
                        value={password}
                        onChange={(isValid) => {}}
                        messages={{
                          minLength: "Must be 8 characters",
                          number: "Must contain a number",
                          capital: "Must contain a uppercase letter",
                          lowercase: "Must contain a lowercase letter",
                          specialChar: "Must contain a special character",
                         
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        className=" btn btn-primary btn-block disabled"
                      >
                        Create new account
                      </button>
                    </div>
                    <div className="form-group submitting_text">
                      By continuing, you agree to
                      <u>
                        <a href="/end-user-license-agreement?v=full">
                          End user license agreement
                        </a>
                      </u>
                      &amp;
                      <u>
                        <a href="/Privacy-Policy?v=full">Privacy Policy.</a>
                      </u>
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

export default Signup1;
