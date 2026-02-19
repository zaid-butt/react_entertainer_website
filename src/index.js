import React from "react";
import ReactDOM from "react-dom/client";
import "services/i18n.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "assets/css/all.css";
import Loadering from "./components/Loadering.js";

import SiteindexRoutes from "./routes/siteindexRoutes.js";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Suspense fallback={<Loadering />}>
  {<SiteindexRoutes />}
  </React.Suspense>
);

