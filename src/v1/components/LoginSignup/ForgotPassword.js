import {
  React,
  useState,
  useSelector,
  useDispatch,
  useTranslation,
} from "../../../services/centerServices";

import validator from "validator";
import SmLogin from "./SmLogin.js";
import { fetchEmail, fetchUser } from "../../../redux/slices/Auth";
import { use } from "i18next";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ForgotPassword({ setIsEmailExist }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const stateAuth = useSelector((state) => state.auth);
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState("disabled");

  const validateEmail = (e) => {
    let eMail = e.target.value;
    setInputEmail(eMail);
    if (validator.isEmail(eMail)) {
      setEmailMessage("");
      setDisabledBtn("");
    } else {
      setEmailMessage("Please enter valid Email!");
      setDisabledBtn("disabled");
    }
  };

  const validatePass = (e) => {
    let pass = e.target.value;
    setInputPassword(pass);
    if (pass.length > 7) {
      setPassMessage("");
      setDisabledBtn("");
    } else {
      setPassMessage("Please enter valid password");
      setDisabledBtn("disabled");
    }
  };

  const continueBtn = async (e) => {
    e.preventDefault();
    if (inputEmail != "" && inputPassword == "") {
      const captchaToken = await executeRecaptcha("emailexist");
      setIsEmailExist(inputEmail);
      dispatch(fetchEmail({ inputEmail, captchaToken }));
    } else if (inputEmail != "" && inputPassword != "") {
      const captchaToken = await executeRecaptcha("login");
      console.log(captchaToken);
      dispatch(fetchUser({ inputEmail, inputPassword, captchaToken }));
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
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <fieldset>
                        <div class="rforgotpass_content">
                          <h4>Forgot your password?</h4>
                          <span className="fs15 cogray">
                            It happens! Tell us your registered email, we will
                            send a link to reset your password.
                          </span>
                          <br/><br/>
                        </div>
                        <div className="signup-header">
                          <label htmlFor="Emailaddress">Email address </label>
                          {stateAuth.data?.success && (
                            <label>
                              <a href={"/" + t("html_lang") + "/signin"}>
                                Switch account
                              </a>
                            </label>
                          )}
                        </div>

                        <input
                          className="form-control"
                          type="text"
                          value={inputEmail}
                          onChange={(e) => validateEmail(e)}
                          placeholder="example@gmail.com"
                          readOnly={stateAuth.data?.success && "readOnly"}
                        />
                        <div className="message-invalid">{emailMessage}</div>
                      </fieldset>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      id="signinsubmit"
                      className={"btn btn-primary btn-block "}
                      type="button"
                      onClick={continueBtn}
                    >
                      Send reset link
                    </button>
                    <button
                      id="signinsubmit"
                      className={"btn btn-primary btn-block btn-secondary" }
                      type="button"
                      onClick={continueBtn}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
