import {
  React,
  useEffect,
  useState,
  useParams,
  useTranslation,
  useDispatch,
  useSelector,
  siteUrl,
  setSiteUrl,
  currentLocationId,
} from "../../../services/centerServices";
import "./Header.css";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

import Search from "../../components/Headers/Search.js";
import LanguageSwitcher from "./LanguageSwitcher.js";
import UserLoginReg from "../../components/Headers/User_LoginReg.js";
import RegionsPopup from "../../components/Headers/RegionsPopup.js";

import { isAuthorized } from "../../../redux/slices/Auth";
import { language } from "../../../redux/languageReducers.js";
import { fetchLoctions } from "../../../redux/slices/Locations";
import { nodeApi } from "../../../services/apiServices";

function TopHeader(props) {
  const { t } = useTranslation();
  const { lang, location, city } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location_name = localStorage.getItem("location_name") ?? t("toploc_dubai");
  const logOut = () => {
    localStorage.removeItem("auth");
  };
  let auth = JSON.parse(localStorage.getItem("auth"));
  const token = auth ? auth.data?.data?.validation_params.auth_token : "";
  const loc_id = localStorage.getItem("location_id") ?? 1;
  const currentHomeUrl = localStorage.getItem("currentHomeUrl") ?? '/en-ae/dubai-n-emirates';
  useEffect(() => {
    nodeApi.defaults.headers.__location_id = loc_id;
    nodeApi.defaults.headers.__language = lang;
    nodeApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    dispatch(isAuthorized(auth));
  }, [loc_id]);
  useEffect(() => {
    dispatch(language(lang));
  }, [lang]);
  useEffect(() => {
    dispatch(fetchLoctions());
  }, []);
  

  setSiteUrl("/" + lang + "-" + location + "/" + city);

  return (
    <>
      <header id={props.onhome === 1 ? "" : "head_white"}>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="fixed-top"
        >
          <a className="navbar-brand logo" onClick={currentLocationId(loc_id)} href={currentHomeUrl}> 
            <img className="d-d" src={t("logo")} alt="logo" />
            <img className="d-mob" src={t("logomob")} alt="logo" />
          </a>
          <ul className="my-2 moblink d-mob">
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  Buy Memberships
                </a>
              </li>
          </ul>

          {<Search />}

          <NavbarToggle>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggle>

          <Navbar.Collapse id="navbarCollapse">
            <NavbarToggle className="d-mob">
              <i className="bi bi-x-lg"></i>
            </NavbarToggle>

            <ul className="navbar-nav ml-md-auto">
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  {t("toplink_memberships")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/${lang}-${location}/how-it-works`}>
                  {t("toplink_Howitworks")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#0">
                  {t("toplink_BecomePartner")}
                </a>
              </li>
            </ul>

            <ul className="navbar-nav toplocflag">
              <li className="nav-item">
                <a
                  className="nav-link locflag Dubai"
                  href="javascript:;"
                  onClick={handleShow}
                >
                  {/* {t("toploc_dubai")} */}
                  {location_name}
                </a>
              </li>
              {<LanguageSwitcher />}
            </ul>

            <UserLoginReg logout={logOut} user={isAuth?.data} />

            <div className="dropdown downscan">
              <Dropdown>
                <DropdownToggle className="toprt_downapp btn btn-light my-2 my-sm-0">
                  {t("Download_app")}
                </DropdownToggle>
                <Dropdown.Menu>
                  <table
                    width="100%"
                    border="0"
                    cellSpacing="0"
                    cellPadding="10px"
                  >
                    <tbody>
                      <tr>
                        <td className="downscan_img">
                          <img
                            src="https://b2cappassetscdn.theentertainerme.com/website_images/downscan.png"
                            alt="downscan"
                          />
                        </td>
                        <td className="downscan_cont">
                          <h4>Scan QR to install the app</h4>
                          <p>Install or open the App via QR Code</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <Modal
        id="regions"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <ModalHeader>
          <h5 className="modal-title" id="toplocflagLabel">
            Choose your location
          </h5>
          <button type="button" className="close" onClick={handleClose}>
            <span>&times;</span>
          </button>
        </ModalHeader>
        <Modal.Body>{<RegionsPopup />}</Modal.Body>
      </Modal>
    </>
  );
}
export default TopHeader;
