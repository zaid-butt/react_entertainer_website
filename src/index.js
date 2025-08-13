import React from "react";
import ReactDOM from "react-dom/client";
import "./services/i18n.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/all.css";
import Loadering from "./v1/components/Loadering.js";

import { Provider } from "react-redux";
import store from "./redux/store";
import SiteindexRoutes from "./routes/siteindexRoutes.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.Suspense fallback={<Loadering/>}>
      <SiteindexRoutes />
    </React.Suspense>
  </Provider>
);
