import Profile from "../../../assets/images/icon_pro_Profile.svg";
import VIPKeyActivation from "../../../assets/images/icon_pro_VIPKeyActivation.svg";
import Leaderboard from "../../../assets/images/icon_pro_Leaderboard.svg";
import SavedCards from "../../../assets/images/icon_pro_SavedCards.svg";
import Subscriptions from "../../../assets/images/icon_pro_Subscriptions.svg";
import Family from "../../../assets/images/icon_pro_Family.svg";
import Notifications from "../../../assets/images/icon_pro_Notifications.svg";
import HelpSupport from "../../../assets/images/icon_pro_HelpSupport.svg";
import Preferences from "../../../assets/images/icon_pro_Preferences.svg";
//dummy
import React from "react";
import Nav from "react-bootstrap/Nav";
import UserBadg from "./UserBadg";

function LeftNav() {
  return (
    <>
      <Nav variant="pills" className="flex-column">
      <UserBadg />
        <Nav.Item>
          <Nav.Link eventKey="Profile"><img src={Profile} alt=" " /> Profile </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="VIPKeyActivation"><img src={VIPKeyActivation} alt=" " /> VIP Key Activation </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Leaderboard"><img src={Leaderboard} alt=" " /> Leaderboard </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="SavedCards"><img src={SavedCards} alt=" " /> Saved Cards </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Subscriptions"><img src={Subscriptions} alt=" " /> Subscriptions </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Family"><img src={Family} alt=" " /> Family </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Notifications"><img src={Notifications} alt=" " /> Notifications </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="HelpSupport"><img src={HelpSupport} alt=" " /> Help & Support </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Preferences"><img src={Preferences} alt=" " /> Preferences </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default LeftNav;
