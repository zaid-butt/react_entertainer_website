import axios from "axios";

const auth_key =
  "Basic ZW50ZXJ0YWluZXI6SjJRZFdNSDY0ZHNRM1JYeWluRDQ1RERzc3cwMzY=";

/***************************
 *
 *  python search instance
 *
 ***************************/
const baseURL = process.env.REACT_APP_BASE_PYTHON_API;
// Create a source for cancel tokens
let baseCancelToken;
export const pythonInstance = axios.create({
  baseURL,
});
pythonInstance.defaults.headers.common = {
  ContentType: "application/json",
  Accept: "text/plain, application/json",
  Authorization: auth_key,
};

pythonInstance.interceptors.request.use(
  (config) => {
    const encodedData = btoa(JSON.stringify(config.data));
    if (baseCancelToken)
      baseCancelToken.cancel("Operation canceled by the user.");
    baseCancelToken = axios.CancelToken.source();
    config.cancelToken = baseCancelToken.token;
    config.data = { __b64p: encodedData };

    return config;
  },
  (error) => {
    console.log("🚀 ~ file: pythonApiInstance.js:16 ~ error:", error);
  }
);

pythonInstance.interceptors.response.use(
  (res) => {
    const decodedRes = JSON.parse(atob(res.data));
    return decodedRes;
  },
  (error) => {
    throw error;
  }
);

/**********************************
 *
 *  python outlet search instance
 *
 **********************************/
const baseURLOutlet = process.env.REACT_APP_BASE_PYTHON_OUTLET_API;
// Create a source for cancel tokens
let outletCancelToken;
export const pythonOutletSearchInstance = axios.create({
  baseURL: baseURLOutlet,
});
pythonOutletSearchInstance.defaults.headers.common = {
  ContentType: "application/json",
  Accept: "text/plain, application/json",
  Authorization: auth_key,
};

pythonOutletSearchInstance.interceptors.request.use(
  (config) => {
    const encodedData = btoa(JSON.stringify(config.data));

    if (outletCancelToken)
      outletCancelToken.cancel("Operation canceled by the user.");
    outletCancelToken = axios.CancelToken.source();
    config.cancelToken = outletCancelToken.token;

    config.data = { __b64p: encodedData };
    return config;
  },
  (error) => {
    console.log("🚀 ~ file: pythonApiInstance.js:16 ~ error:", error);
  }
);

pythonOutletSearchInstance.interceptors.response.use(
  (res) => {
    const decodedRes = JSON.parse(atob(res.data));
    return decodedRes;
  },
  (error) => {
    throw error;
  }
);
