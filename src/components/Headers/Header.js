import {
  React,
  useState,
  useParams,
  useTranslation,
  setSiteUrl,
  siteUrl,
} from "services/centerServices";
import "./Header.css";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

import Search from "components/Headers/Search.js";
import LanguageSwitcher from "./LanguageSwitcher.js";
import UserLoginReg from "components/Headers/User_LoginReg.js";
import RegionsPopup from "components/Headers/RegionsPopup.js";

function TopHeader(props) {
  const { t } = useTranslation();
  
  const {lang, location, city } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  setSiteUrl("/"+lang+"-"+location+"/"+city)

  return (
    <>
      <header id={props.onhome === 1 ? "" : "head_white"}>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="fixed-top"
        >
          <a className="navbar-brand logo" href={siteUrl}>
            <img className="d-d" src={t("logo")} alt="logo" />
            <img className="d-mob" src={t("logomob")} alt="logo" />
          </a>
          <ul className="my-2 moblink d-mob">
            {
              <li className="nav-item">
                <a className="nav-link" href="#plans">
                  Buy Memberships
                </a>
              </li>
            }
          </ul>

          <Search />

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
                <a className="nav-link" href="#0">
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
                  href="#0"
                  onClick={handleShow}
                >
                  {t("toploc_dubai")}
                </a>
              </li>
              {<LanguageSwitcher />}
            </ul>

            <UserLoginReg />

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
