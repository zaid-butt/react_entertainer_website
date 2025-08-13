import {React, useEffect, Helmet, useParams, useTranslation } from "services/centerServices";

import "components/LoginSignup/login.css";
import Loginleft from "components/LoginSignup/Loginleft.js";
import Signup1 from "components/LoginSignup/Signup1.js";

function Signin() {
  
  const {t} = useTranslation();
  const {lang} = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = i18n.dir();
    // eslint-disable-next-line
  }, [i18n, i18n.language]);

  return (
    <>
       {<Loginleft />}
       {<Signup1 />}
       <Helmet>
        <html lang={t("html_lang")} />
        <body className={"pglogin"} />
      </Helmet>
    </>
  );
}

export default Signin;
