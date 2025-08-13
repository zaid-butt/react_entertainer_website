
import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

function Language() {
  return (
    <>
      <li className="nav-item langdropdown">
        <div className="d-mob">Select language </div>
        <Dropdown>
          <DropdownToggle variant="link">English</DropdownToggle>

          <Dropdown.Menu className="dropdown-menu-right">
            <div className="langdropdownbg"></div>
            <div className="dropdown-menu dropdown-menu2">
              <div className="d-mob">
                Select language
                <DropdownToggle variant="link">
                  <span>×</span>
                </DropdownToggle>
              </div>
              <a className="dropdown-lang active">
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_en.svg" />
                <span>English</span>
              </a>
              <a className="dropdown-lang">
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_ar.svg" />
                <span>العربيّة</span>
              </a>
              <a className="dropdown-lang">
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_ru.svg" />
                <span>Cyrillic</span>
              </a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </>
  );
}
export default Language;
