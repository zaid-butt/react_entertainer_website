import {
  React,
  Helmet,
  useParams,
  //useSelector,
} from "../../services/centerServices";
import Tab from "react-bootstrap/Tab";
import { Header, Footer } from "../components/commonCponts";
import {
  LeftNav,
  Profile,
  VIPKeyActivation,
  Leaderboard,
  SavedCards,
  Subscriptions,
  Family,
  Notifications,
  HelpSupport,
  Preferences,
} from "../components/Profile/ProfileComponents";

function Profilepg() {
  //const user = useSelector((state) => state.user);
  const { location, city } = useParams();
  return (
    <>
      {<Header />}
      <div className="wrapper">
        <div id="Profile" className="container padtop padbot">
          <Tab.Container id="proleft" defaultActiveKey="Subscriptions">
            <LeftNav />
            <Tab.Content>
              <Tab.Pane eventKey="Profile">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="VIPKeyActivation">
                <VIPKeyActivation />
              </Tab.Pane>
              <Tab.Pane eventKey="Leaderboard">
                <Leaderboard />
              </Tab.Pane>
              <Tab.Pane eventKey="SavedCards">
                <SavedCards />
              </Tab.Pane>
              <Tab.Pane eventKey="Subscriptions">
                <Subscriptions />
              </Tab.Pane>
              <Tab.Pane eventKey="Family">
                <Family />
              </Tab.Pane>
              <Tab.Pane eventKey="Notifications">
                <Notifications />
              </Tab.Pane>
              <Tab.Pane eventKey="HelpSupport">
                <HelpSupport />
              </Tab.Pane>
              <Tab.Pane eventKey="Preferences">
                <Preferences />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      <Footer />
      <Helmet>
        <body className={"pgprofile " + location + " " + city} />
      </Helmet>
    </>
  );
}
export default Profilepg;
