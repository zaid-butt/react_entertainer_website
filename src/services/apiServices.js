import axios from "axios";

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";
//  ===========================================================================
// Family API Instance start here
//  ===========================================================================
const familyApi = axios.create({
  baseURL: process.env.REACT_APP_FAMILY_URL,
});
//  ===========================================================================
// Node API Instance start here
//  ===========================================================================
const nodeApi = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
});
// Add a request interceptor
nodeApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
nodeApi.interceptors.response.use(
  function (response) {
    const decoded = decodeURIComponent(escape(atob(response.data)));
    response.data = JSON.parse(decoded);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//  ===========================================================================
// Python API Instance start here
//  ===========================================================================

const pythonApi = axios.create({
  baseURL: process.env.REACT_APP_PYTHONE_URL,
});
// Add a request interceptor
pythonApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
pythonApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfdG9rZW4iOiIyNGZlOThiNC05ZjFjLTRjYjgtOGFhNC0zMWY1YWMwNmMyNmIiLCJzZXNzaW9uX3Rva2VuIjoiIiwiY29tcGFueSI6InJ3ZCIsIndsY29tcGFueSI6InJ3ZCJ9.o4pqEXxRSbSJDiMGqKddfmSYUDwnmBv7P021TADczXI";
pythonApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//  ===========================================================================
// Pythor Search API Instance start here
//  ===========================================================================
const pythonSearchApi = axios.create({
  baseURL: process.env.REACT_APP_PYTHONE_SEARCH_URL,
});
// Add a request interceptor
pythonSearchApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
pythonSearchApi.interceptors.response.use(
  function (response) {
    const decoded = atob(response.data);
    response = JSON.parse(decoded);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const auth_kesy =
  "Basic ZW50ZXJ0YWluZXI6SjJRZFdNSDY0ZHNRM1JYeWluRDQ1RERzc3cwMzY=";
pythonSearchApi.defaults.headers.common["Authorization"] = `${auth_kesy}`;

//  ===========================================================================
// Pythor Profile API Instance start here
//  ===========================================================================
const pythonProfileApi = axios.create({
  baseURL: process.env.REACT_APP_PYTHONE_PROFILE_URL,
});
// Add a request interceptor
pythonProfileApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
pythonProfileApi.interceptors.response.use(
  function (response) {
    const decoded = atob(response.data);
    response = JSON.parse(decoded);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const token_for_profile =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55IjoiZW50ZXJ0YWluZXIiLCJzZXNzaW9uX3Rva2VuIjoiODdmYjFhNDQtZGJkOS00YTBhLWE4NDYtYTUyZDY3MWU5MjZkIiwiYXBpX3Rva2VuIjoiMjRmZTk4YjQtOWYxYy00Y2I4LThhYTQtMzFmNWFjMDZjMjZiIn0.22Bcqe22c19fwerjvqn1217eIBHfTBBfqffv49Y6L4Y";
pythonProfileApi.defaults.headers.common[
  "Authorization"
] = `${token_for_profile}`;

//  ===========================================================================
// Google Captcha API Instance start here
//  ===========================================================================
const gCaptcha = axios.create({
  baseURL: process.env.REACT_APP_CAPTCHA_URL,
});

export {
  familyApi,
  nodeApi,
  pythonApi,
  pythonSearchApi,
  pythonProfileApi,
  gCaptcha,
};
