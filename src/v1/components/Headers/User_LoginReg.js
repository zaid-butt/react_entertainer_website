import { React, useTranslation, useParams} from "../../../services/centerServices.js";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

function User_LoginReg({ logout, user }) {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <>
      {!user ? (
        <ul className="navbar-nav logreg">
          <li className="nav-item">
            <a className="nav-link" href={"/" + t("html_lang") + "/signin"}>
              {t("top_login")}
            </a>
          </li>
          <li className="nav-item">
            <a href=" " className="nav-link">
              /
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"/" + t("html_lang") + "/signin"}>
              {t("top_register")}
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav logreg logproile">
          <li className="nav-item">
            <div
              className="dropdown d-flex justify-content-center"
              id="logproile"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Dropdown>
                <DropdownToggle variant="link" className="top_userpro">
                  <a className="nav-link logreg_proile">
                    <img
                      src="https://b2cappassetscdn.theentertainerme.com/website_images/Testi_pro_img1.png"
                      alt="Testi_pro_img1"
                    />
                  </a>
                  <div className="logreg_proilename">
                    {user?.data?.user.first_name}
                  </div>
                </DropdownToggle>
                <Dropdown.Menu>
                  <a className="dropdown-item" href={"/"+lang+"/profile"}>
                    My Profile
                  </a>
                  <a className="dropdown-item" href="#0">
                    Preference Centre
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/" onClick={logout}>
                    Sign Out
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
export default User_LoginReg;
