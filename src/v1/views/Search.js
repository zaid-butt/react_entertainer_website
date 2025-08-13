import { React, Helmet, useParams } from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import { Container, Row, Col } from "reactstrap";
import {
  SearchTopheader,
  SearchFilters,
  SearchSlider,
  InsideScoop,
} from "../components/Searchpg/SearchComponents";
import McardTemp from "../components/Outlets/McardTemp";
import { useEffect, useState } from "react";
import { searchOutletApi } from "api/search/searchApi";
import useDecryptUrlParams from "hooks/useDecryptUrlParams";

function Search() {
  const { location, city } = useParams();

  // set page limit here
  const pageLimit = 20;

  // getting query string and decoded data from  hook
  const [queryString, decodedQueryString] = useDecryptUrlParams();
  // component state
  // saving response for api to get total count etc
  const [searchData, setSearchData] = useState([]);
  // state  for outlets to be shown
  const [outlets, setOutlets] = useState([]);
  // fiters state
  const [selectedFilters, setSelectedFilters] = useState({});
  // all other states
  const [searchLoading, setSearchLoading] = useState(true);
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const [offsetSize, setOffsetSize] = useState(0);

  useEffect(() => {
    // calling outlets api here
    setOffsetSize(0);

    searchOutletApi({
      params: {
        ...decodedQueryString,
        ...selectedFilters,
        offset: offsetSize,
        limit: pageLimit,
        // sort_by: selectedFilters?.sort_by?.apiParam,
        // sub_category_cuisine_attribute_ids:
        //   selectedFilters?.sub_category_cuisine_attribute_ids
        //     ? selectedFilters?.sub_category_cuisine_attribute_ids
        //     : decodedQueryString?.sub_category_cuisine_attribute_ids,
        // custom_types: selectedFilters?.custom_types?.apiParam,
      },
      setLoading: setSearchLoading,
    }).then((res) => {
      setSearchData(res?.data);
      setOutlets(res?.data?.outlets);
      setResultCount(res?.data?.total_records);
    });
  }, [queryString, selectedFilters]);

  // handling events
  const handleViewAll = () => {
    if (offsetSize + pageLimit < searchData?.total_records) {
      searchOutletApi({
        params: {
          offset: offsetSize + pageLimit,
          limit: pageLimit,
          ...decodedQueryString,
        },
        setLoading: setViewAllLoading,
      }).then((res) => {
        setOutlets((prev) => [...prev, ...res?.data?.outlets]);
      });
    }
    setOffsetSize(offsetSize + pageLimit);
  };

  return (
    <>
      {<Header />}
      <div className="wrapper">
        <div className="padtop padbot">
          <Container id="SearchTopheader_wrapper">
            <div id="SearchTopheader">{<SearchTopheader />}</div>
          </Container>
          <Container id="SearchFilters_wrapper">
            <div id="SearchFilters">
              {
                <SearchFilters
                  setSelectedFilters={setSelectedFilters}
                  selectedFilters={selectedFilters}
                  resultCount={resultCount}
                  resultCountLoading={searchLoading}
                />
              }
            </div>
          </Container>
          <Container id="SearchSlider_wrapper">
            <div id="SearchSlider">{<SearchSlider />}</div>
          </Container>
          <Container>
            <Row>
              <Col id="SearchListing" md={12}>
                {searchLoading ? (
                  "Loading....."
                ) : (
                  <>
                    {" "}
                    {outlets?.length
                      ? outlets.map((outlet, index) => {
                          return <McardTemp outlet={outlet} key={index} />;
                        })
                      : "No Data found"}
                  </>
                )}
              </Col>
              {outlets?.length !== 0 &&
                outlets?.length !== searchData?.total_records && (
                  <Col md={12} className="text-center">
                    {viewAllLoading ? (
                      "Loading..."
                    ) : (
                      <button
                        className="btn btn-secondary"
                        onClick={handleViewAll}
                      >
                        View all{" "}
                        {outlets.length &&
                          searchData?.total_records - outlets?.length}
                        places
                      </button>
                    )}
                  </Col>
                )}
            </Row>
          </Container>

          <Container id="InsideScoop_wrapper">
            <Row>
              <Col id="InsideScoop" md={12}>
                {<InsideScoop />}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {<Footer />}
      <Helmet>
        <body className={"pgsearch " + location + " " + city} />
      </Helmet>
    </>
  );
}

export default Search;
