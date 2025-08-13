import {
  React,
  useState,
  useEffect,
  useDispatch,
} from "../../../services/centerServices.js";
import "./Search.css";
import { Input } from "reactstrap";
import { searchSuggestionsApi } from "api/search/searchApi.js";
import { debounce } from "lodash";
import { setCuisinesParams } from "redux/slices/Search.js";
import { setMerchantParams } from "redux/slices/Search.js";
import { useCallback } from "react";
import Loading from "../Loadering.js";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min.js";
import { setEncryptedUrlparams } from "utilities/utils.js";
import useDecryptUrlParams from "hooks/useDecryptUrlParams.js";

const BoldResults = ({ searchQuery, text }) => {
  const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));

  return (
    <div>
      {parts.map((part, index) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        )
      )}
    </div>
  );
};
const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const urlLocation = useLocation();
  const [queryString, decodedQueryString] = useDecryptUrlParams();
  // getting location and language from redux and setting route base path
  // const lang = useSelector((state) => state.language);
  // const loc = useSelector((state) => state.location);
  const routePath = `/${"en-ae"}/${"dubai-n-emirates"}/search/outlets/`;

  // app component state
  const [searchQuery, setSearchQuery] = useState(decodedQueryString?.searchQuery);
  const [debouncedString, setDebouncedString] = useState();
  const [searchData, setSearchData] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState();
  const [loading, setLoading] = useState(true);

  // calling sugesstions api
  useEffect(() => {
    !searchQuery && setSearchData([]);
    const fetchSearch = async () => {
      const res = await searchSuggestionsApi({
        params: {
          query: searchQuery,
        },
        setLoading,
      });
      setSearchData(res);
    };
    !searchQuery && setSearchData([]);
    searchQuery && fetchSearch();
  }, [debouncedString]);

  const debouncedSetSearchQuery = useCallback(
    debounce((value) => {
      setLoading(false);
      setDebouncedString(value);
    }, 1000),
    []
  );
  const onSearch = (event) => {
    const value = event.target.value;
    setLoading(true);
    setShowSearchDropdown(true);
    setSearchQuery(value);
    debouncedSetSearchQuery(value);
    event.target.value === "" &&
      history.push({
        // pathname: routePath,
        search: `?${new URLSearchParams("").toString()}`,
      });
  };

  const handleSearchClick = ({ value, itemType, searchQuery }) => {
    setSearchQuery(searchQuery);
    if (itemType === "general_section") {
      //dispatch(setCuisinesParams(value));
      const queryValue = { ...value, searchQuery: searchQuery };
      history.push({
        pathname: routePath,
        //search: `?${new URLSearchParams(queryValue).toString()}`,
        search: setEncryptedUrlparams(queryValue),
      });
      urlLocation.pathname !== routePath && window.location.reload();
    } else {
      dispatch(setMerchantParams(value));
    }
  };

  const checkOutsideClick = () => {
    document.addEventListener("click", (e) => {
      var element = document.getElementById("parent-node");
      if (e.target !== element && !element.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    });
  };

  return (
    <>
      <form className="searchbox">
        <div
          onBlur={checkOutsideClick}
          className="searchboxwrap"
          id="parent-node"
        >
          <Input
            className="form-control mr-sm-2 search"
            type="text"
            placeholder="Restaurant, hotels, etc..."
            autoComplete="off"
            required="required"
            aria-label="Search"
            onChange={onSearch}
            onClick={() => searchQuery && setShowSearchDropdown(true)}
            value={searchQuery || ""}
          />

          <button
            type="reset"
            title="Clear the search query."
            className="search_close"
            onClick={() => {
              setSearchQuery("");
              history.push({
                //pathname: routePath,
                search: `?${new URLSearchParams("").toString()}`,
              });
            }}
          >
            <svg
              role="img"
              aria-label="Reset"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 348.333 348.334"
            >
              <g>
                <g>
                  <path
                    d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85   c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563   c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85   l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554   L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                    className="active-path"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          {searchQuery && showSearchDropdown && (
            <div
              onClick={() => setShowSearchDropdown(false)}
              onBlur={() => setShowSearchDropdown(false)}
              id="search_suggestion"
              style={{ display: "block" }}
            >
              <div id="sugges_wrap">
                <div className="sugges_wraptop">
                  <span>Suggestions</span>
                  <a href="#0">View all</a>
                </div>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    {searchData?.data?.results?.length ? (
                      searchData?.data?.results?.map((result, index) => {
                        return (
                          <div key={index}>
                            {result.details.map((item, index) => {
                              return (
                                <div
                                  className="sugges_wrap"
                                  key={index}
                                  onClick={() =>
                                    handleSearchClick({
                                      value: item.api_params,
                                      itemType: result.section_identifier,
                                      searchQuery: item.title,
                                    })
                                  }
                                >
                                  <div className="imgbox">
                                    <img src={item.image_url} alt="product" />
                                  </div>
                                  <div className="content">
                                    <div className="title">
                                      {
                                        <BoldResults
                                          searchQuery={searchQuery}
                                          text={item.title}
                                        />
                                      }
                                      <p>{item.sub_title}</p>
                                    </div>

                                    <div className="stags">
                                      {item.merchant_tags &&
                                        item.merchant_tags.map(
                                          (tag, tagIndex) => {
                                            return (
                                              <div key={tagIndex}>
                                                {tag.abbreviated_text && (
                                                  <span
                                                    className={
                                                      "tags " + tag.identifier
                                                    }
                                                  >
                                                    {tag.abbreviated_text}
                                                  </span>
                                                )}
                                              </div>
                                            );
                                          }
                                        )}
                                    </div>
                                    {item?.distance && (
                                      <div className="distance">
                                        {item?.distance}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })
                    ) : (
                      <div>{"No Results Found"}</div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
export default Search;
