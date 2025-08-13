import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { lang, city } from "../const.js";
 
// import Ztest from "./views/ztest.js";
const Loadering = React.lazy(() => import("components/Loadering.js"));
const Index = React.lazy(() => import("views/Home.js"));
const Signin = React.lazy(() => import("views/Login.js"));
const Signup = React.lazy(() => import("views/Signup.js"));
const Search = React.lazy(() => import("views/Search.js"));
const Outlets = React.lazy(() => import("views/Outlets.js"));
const Profile = React.lazy(() => import("views/Profilepg.js"));
const Plans = React.lazy(() => import("views/Planspg.js"));

function siteindex() {
  return (
    <>
      <Router>
        <Switch>
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
            path={`/:lang${lang}/login`}
            render={(props) => <Signin {...props} />}
          />
          <Route
            path={`/:lang${lang}/signup`}
            render={(props) => <Signup {...props} />}
          />
          <Route
            path={`/:lang${lang}-:location/profile`}
            render={(props) => <Profile {...props} />}
          />
          <Route
            path={`/loader`}
            render={(props) => <Loadering {...props} />}
          />
          <Redirect to="/en-ae/dubai-n-emirates" />
        </Switch>
      </Router>
    </>
  );
}

export default siteindex;
