
import { React, useTranslation } from "services/centerServices.js";

function User_LoginReg() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="navbar-nav logreg">
        <li className="nav-item">
          <a className="nav-link" href={"/" + t("html_lang") + "/signin"}>
            {t("top_login")}
          </a>
        </li>
        <li className="nav-item">
          <a href=" " className="nav-link">/</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"/" + t("html_lang") + "/signup"}>
            {t("top_register")}
          </a>
        </li>
      </ul>
      <ul className="navbar-nav logreg logproile" style={{ display: "none" }}>
        <li className="nav-item">
          <div
            className="dropdown d-flex justify-content-center"
            id="logproile"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <a href=" " className="nav-link logreg_proile">
              <img src="https://b2cappassetscdn.theentertainerme.com/website_images/Testi_pro_img1.png" alt="Testi_pro_img1" />
            </a>
            <div className="logreg_proilename">Ztest</div>
            <div className="dropdown-menu" aria-labelledby="logproile">
              <a className="dropdown-item" href="#0">
                Action
              </a>
              <a className="dropdown-item" href="#0">
                Another action
              </a>
              <a className="dropdown-item" href="#0">
                Something else here
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
export default User_LoginReg;
