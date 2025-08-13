import {
  React,
  useEffect,
  Helmet,
  useParams,
  useTranslation,
  useSelector,
  useDispatch,
} from "../../services/centerServices";

import "../components/LoginSignup/login.css";
import Loginleft from "../components/LoginSignup/Loginleft.js";
import Login1 from "../components/LoginSignup/Login1.js";
import Signup1 from "../components/LoginSignup/Signup1.js";

import { nodeApi } from "../../services/apiServices";

import { language } from "../../redux/languageReducers.js";
import { city } from "const";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useState } from "react";
import ForgotPassword from "v1/components/LoginSignup/ForgotPassword";

function Signin() {
  const dispatch = useDispatch();
  const stateAuth = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const { lang, city } = useParams();
  const { i18n } = useTranslation();
  const [isEmailExist, setIsEmailExist] = useState("");
 
  useEffect(() => {
    nodeApi.defaults.headers.__location_id = 1;
    nodeApi.defaults.headers.__language = lang;
  }, []);

  useEffect(() => {
     
    i18n.changeLanguage(lang);
    document.dir = i18n.dir();
    dispatch(language(lang));
  }, [i18n, i18n.language, lang]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(stateAuth));
    if (stateAuth.isAuth) {
      window.location.href = "/" + lang + "/profile";
    }
  }, [stateAuth.isAuth]);

  return (
    <>
      <Loginleft />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      >
        <ForgotPassword />
        {stateAuth.data !== null && stateAuth.data?.data?.signup === true ? (
          <Signup1 isEmailExist={isEmailExist} />
        ) : (
          <Login1 setIsEmailExist={setIsEmailExist} />
        )}
      </GoogleReCaptchaProvider>
      <Helmet>
        <html lang={t("html_lang")} />
        <body className={"pglogin"} />
      </Helmet>
    </>
  );
}

export default Signin;
