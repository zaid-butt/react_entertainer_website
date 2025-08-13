import {
  React,
  Helmet,
  useParams,
  useEffect,
  useSelector,
  useDispatch,
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
import { fetchProfile } from "../../redux/slices/Profile";
import { fetchFamily } from "../../redux/slices/Family";
import { fetchVipKey } from "../../redux/slices/VipKey";
import { fetchLeaderboard } from "../../redux/slices/Leaderboard";
import { fetchSubscriptions } from "../../redux/slices/Subscriptions";
import { fetchSavedCards } from "../../redux/slices/SavedCards";
import { fetchNotifications } from "../../redux/slices/Notifications";
import { fetchHelpSupport } from "../../redux/slices/HelpSupport";
import { fetchPreferences } from "../../redux/slices/Preferences";
function Profilepg() {
  const dispatch = useDispatch();
  const { location, city } = useParams();
  const lang = useSelector((state) => state.language);
  const loc = useSelector((state) => state.location);
  const isAuth = useSelector((state) => state.auth);

  const stateProfile = useSelector((state) => state.profile);
  const stateLeaderboard = useSelector((state) => state.leaderboard);
  
  const userId = isAuth.data?.data?.user?.user_id;

  const getData = (tab) => {
    switch (tab) {
      case 1:
        dispatch(fetchProfile({ userId, lang, loc }));
        break;
      case 2:
        dispatch(fetchVipKey({ userId, lang, loc }));
        break;
      case 3:
        dispatch(fetchLeaderboard({ userId, lang, loc }));
        break;
      case 4:
        dispatch(fetchFamily({ userId, lang, loc }));
        break;
      case 5:
        dispatch(fetchSubscriptions({ userId, lang, loc }));
        break;
      case 6:
        dispatch(fetchSavedCards({ userId, lang, loc }));
        break;
      case 7:
        dispatch(fetchNotifications({ userId, lang, loc }));
        break;
      case 8:
        dispatch(fetchHelpSupport({ userId, lang, loc }));
        break;
      case 9:
        dispatch(fetchPreferences({ userId, lang, loc }));
        break;
    }
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchProfile({ userId }));
    }
  }, [isAuth]);

  return (
    <>
      {<Header />}
      <div className="wrapper">
        {console.log("ProfileState", stateProfile)}
        {console.log("stateLeaderboard", stateLeaderboard)}
        <div id="Profile" className="container padtop padbot">
          <Tab.Container id="proleft" defaultActiveKey="Profile">
            <LeftNav getData={getData} />
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
