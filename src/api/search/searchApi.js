import store from "redux/store";
import {
  pythonInstance,
  pythonOutletSearchInstance,
} from "./pythonApiInstance";
import axios from "axios";

export const searchSuggestionsApi = async ({
  params,
  setLoading = Function,
}) => {
  const { language } = store.getState();
  const defaultParams = {
    language,
    // __outlets_size: 10,
    // __lat: "25.219962",
    // company: "entertainer",
    // __platform: "ios",
    // app_version: "8.19.03",
    // device_key: "ios-B0510BD1-86CE-4459-87C4-C418BFE71B16",
    // __i: "9142954",
    // currency: "AED",
    // user_id: "9142954",
    query: "",
    // __device_id: "ios-B0510BD1-86CE-4459-87C4-C418BFE71B16",
    // category: "all",
    // lng: "55.391128",
    // session_token: "874b3cca-3219-4b60-8578-acbf7424ec0e",
    location_id: 1,
    // only_distinct_outlets: 1,
    // query_type: "name",
    // selected_place_location_ids: [6],
    // include_travel_outlets: 1,
    // from_search: 1,
    // os_version: "16.4",
    // device_model: "iPhone",
    // time_zone: "Asia/Karachi",
    // __lng: "55.391128",
    // device_os: "ios",
    // include_featured_merchants: 1,
    // lat: "25.219962",
    // __c_s_a_ol_size: 3,
    // auto_redeembility: 1,
    // category_id: 0,
  };
  setLoading(true);
  try {
    const res = await pythonInstance.post(`mega-auto-suggestions`, {
      ...defaultParams,
      ...params,
    });
    setLoading(false);
    return res;
  } catch (error) {
    setLoading(false);
    console.log("🚀 ~ file: searchApi.js:42 ~ error:", error);
  }
};

export const searchOutletApi = async ({ params, setLoading = Function }) => {
  const { language } = store.getState();
  const defaultParams = {
    offset: 0,
    include_travel_outlets: "true",
    include_featured_merchants: false,
    sub_category_cuisine_attribute_ids: [],
    category: "All",
    language,
    category_id: "0",
    lat: "31.5274473",
    lng: "74.3528523",
    __lat: "31.5274473",
    __lng: "74.3528523",
    from_search: "true",
    only_distinct_outlets: "true",
    location_id: 1,
    selected_place_location_ids: [1],
    auto_redeembility: "true",
    is_last_mile_enabled: "true",
    query_type: "name",
    sort: "default",
    limit: 10,
    epc_enabled: true,
    time_zone: "Asia/Karachi",
    session_token: "1f368350-5cbd-45c1-9c8e-141d1c0aa938",
    __t: "1f368350-5cbd-45c1-9c8e-141d1c0aa938",
    currency: "BHD",
    // user_id: "8644277",
    // customer_id: "8644277",
    company: "entertainer",
    __c: "entertainer",
    // app_version: "8.19.02",
    // __platform: "android",
    // platform: "android",
    // device_os: "android",
    // __device_id: "5f2d6e0210cc1a0a",
    // device_model: "Xiaomi%202107113SG",
    // device_key: "5f2d6e0210cc1a0a",
  };
  setLoading(true);
  try {
    const res = await pythonOutletSearchInstance.post(`es_outlets`, {
      ...defaultParams,
      ...params,
    });
    setLoading(false);
    return res;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Handle canceled request
      console.log("Request was canceled:", error.message);
    } else {
      // Handle other errors
      console.error("An error occurred:", error);
      setLoading(false);
    }
  }
};

export const getFilterOptions = async ({ params, setLoading = Function }) => {
  const { language } = store.getState();
  const defaultParams = {
    language,
    from_search: "false",
    location_id: "1",
    user_id: "8644277",
    customer_id: "8644277",
    company: "entertainer",
    lat: "31.5274829",
    lng: "74.3528559",
    __lat: "25.300579",
    __lng: "55.307709",
    time_zone: "Asia/Karachi",
    session_token: "1f368350-5cbd-45c1-9c8e-141d1c0aa938",
    currency: "",
    // sub_category_cuisine_attribute_ids: [],
    // category_id: "4",
    //include_travel_outlets: false,
    // __t: "1f368350-5cbd-45c1-9c8e-141d1c0aa938",
    // __c: "entertainer",
    // app_version: "8.19.02",
    // __platform: "android",
    // platform: "android",
    // device_os: "android",
    //__device_id: "5f2d6e0210cc1a0a",
    // device_model: "Xiaomi%202107113SG",
    // device_key: "5f2d6e0210cc1a0a",
  };
  setLoading(true);
  try {
    const res = await pythonInstance.post(`filter-list`, {
      ...defaultParams,
      ...params,
    });
    setLoading(false);
    return res;
  } catch (error) {
    setLoading(false);
    console.log("🚀 ~ file: searchApi.js:42 ~ error:", error);
  }
};
