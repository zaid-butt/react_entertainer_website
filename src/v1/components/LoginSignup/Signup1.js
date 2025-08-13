import {
  React,
  useState,
  useEffect,
  useSelector,
  useDispatch,
  useTranslation,
} from "../../../services/centerServices";

import validator from "validator";
import SmLogin from "../LoginSignup/SmLogin.js";
import PasswordChecklist from "react-password-checklist";

import { fetchRegister } from "../../../redux/slices/Auth";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


function Signup1({ isEmailExist }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [disabledBtn, setDisabledBtn] = useState("disabled");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [formData, setFormData] = useState({
    email: isEmailExist,
    firstName: "",
    lastName: "",
    password: "",
    g_captcha: ""
  });

  const firstName = (e) => {
    setFormData({ ...formData, firstName: e.target.value });
  };

  const lastName = (e) => {
    setFormData({ ...formData, lastName: e.target.value });
  };

  const validatePass = (e) => {
    let pass = e.target.value;
    setPasswordCheck(pass);
    setFormData({ ...formData, password: pass });
    if (pass.length > 7) {
      setDisabledBtn("");
    } else {
      setDisabledBtn("disabled");
    }
  };

  const createNewBtn = () => {
    console.log(formData)
      dispatch(fetchRegister(formData));
  };
  const captchaTokenNew = async () => {
      const capt = await executeRecaptcha('register');
      console.log(capt)
      setFormData({ ...formData, g_captcha: capt });
  }
  useEffect(() => {
    captchaTokenNew();
  }, []);

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
                            type="email"
                            placeholder="example@gmail.com"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                            value={isEmailExist}
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
                          onChange={(e) => firstName(e)}
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
                          onChange={(e) => lastName(e)}
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
                          onChange={(e) => validatePass(e)}
                        />
                        <span>
                          <i
                            className="bi bi-eye-slash"
                            onClick={togglePassword}
                          ></i>
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
                        value={passwordCheck}
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
                        id="creatNewBtn"
                        type="button"
                        className={"btn btn-primary btn-block " + disabledBtn}
                        onClick={createNewBtn}
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
