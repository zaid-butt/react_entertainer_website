import { React } from "../services/centerServices";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { lang, city } from "../const.js";


const Loadering = React.lazy(() => import("../v1/components/Loadering.js"));
const Index = React.lazy(() => import("../v1/views/Home.js"));
const Signin = React.lazy(() => import("../v1/views/Signin.js"));
const Signup = React.lazy(() => import("../v1/views/Signup.js"));
const Search = React.lazy(() => import("../v1/views/Search.js"));
const Outlets = React.lazy(() => import("../v1/views/Outlets.js"));
const Profile = React.lazy(() => import("../v1/views/Profilepg.js"));
const Plans = React.lazy(() => import("../v1/views/Plans.js"));
const PlanDetails = React.lazy(() => import("../v1/views/PlanDetails.js"));
const HowItWorks = React.lazy(() => import("../v1/views/HowItWorks.js"));

function Siteindex() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route
            path={`/:lang${lang}-:location/:city${city}/search/outlets`}
            render={(props) => <Search {...props} />}
          /> */}
          <Route
            path={`/:lang${lang}-:location/:city${city}/search/outlets`}
            render={(props) => <Search {...props} />}
          />
          <Route
            path={`/:lang${lang}-:location/:city${city}/outlets`}
            render={(props) => <Outlets {...props} />}
          />
          <Route
            path={`/:lang${lang}-:location/:city${city}/plans`}
            render={(props) => <Plans {...props} />}
          />
          
          <Route
            path={`/:lang${lang}-:location/:city${city}`}
            render={(props) => <Index {...props} />}
          />
          <Route
            path={`/:lang${lang}/signin`}
            render={(props) => <Signin {...props} />}
          />
          <Route
            path={`/:lang${lang}/signup`}
            render={(props) => <Signup {...props} />}
          />
          <Route
            path={`/:lang${lang}/profile`}
            render={(props) => <Profile {...props} />}
          />
          <Route
            path={`/loader`}
            render={(props) => <Loadering {...props} />}
          />
           <Route
            path={`/:lang${lang}-:location/how-it-works`}
            render={(props) => <HowItWorks {...props} />}
          />
          <Route
            path={`/:lang${lang}-:location/:slug`}
            render={(props) => <PlanDetails {...props} />}
          />
          <Redirect to="/en-ae/dubai-n-emirates" />
        </Switch>
      </Router>
    </>
  );
}

export default Siteindex;
