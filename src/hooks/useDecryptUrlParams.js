import React from "react";

const useDecryptUrlParams = () => {
  // getting encrypted query params from url
  const urlParams = new Map(
    window.location.search
      .slice(1)
      .split("&")
      .map((kv) => kv.split("="))
  );
  const queryString = urlParams.get("query");
  const decodedQueryString =
    queryString && JSON.parse(atob(decodeURIComponent(queryString)));
  return [queryString, decodedQueryString];
};

export default useDecryptUrlParams;
